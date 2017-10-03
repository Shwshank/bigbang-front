var data = '{"pid": "f4f351c23e8e40b98658607476fa09c6", "children": [{"pid": "f30204c7c09a412bb8a56fa5f32fe899", "name": "Basic structure"}, {"pid": "12691d89626d4a988c648eec9416fbaa", "name": "Legislative branch"}, {"pid": "5881d52fb3d74b3e8f1075c0dc64502b", "children": [{"pid": "027df3e5419f45ceac9eb1a356d595a4", "name": "President"}, {"pid": "eb9b1af1f9b34909b25df9fb13a09374", "name": "Vice-President"}, {"pid": "361d4c7aa609427d8cc5f93bcde5c47c", "name": "Prime Minister"}, {"pid": "97383c2095c34a3c95d35857c14dac8e", "name": "Cabinet, executive departments and agencies"}, {"pid": "d87da5f811d04269859d9bb235a91961", "children": [{"pid": "4542d28b72aa42e894cd4e3a7724d6e2", "name": "Cabinet Secretariat"}], "name": "Civil service"}], "name": "Executive branch"}, {"pid": "c82a0cd2be034a9ca165fdf12ad2ae7e", "children": [{"pid": "17be241fcbcb4fa284505fdf68b46363", "name": "Supreme Court"}], "name": "Judicial branch"}, {"pid": "133ee037c8094f169ad6d9b532c3d9d3", "name": "Elections and voting"}, {"pid": "df5cc7c8576b4177a1a2bd7691ab4f6c", "name": "State and local governments"}, {"pid": "6f660cdeab784d08958b6c1006344450", "children": [{"pid": "d4552f3594c44c0492d735132e7ae5ca", "name": "Taxation"}, {"pid": "93897a14cdce40cea59fe5339370f396", "name": "General budget"}], "name": "Finance"}, {"pid": "c2d3364375bc400d8540daddab973654", "children": [{"pid": "09a2ded58f8e49fc8226e5fadfcd2cb5", "name": "Corruption"}], "name": "Issues"}, {"pid": "ce650d5b0895474b97f56c65edc69a30", "name": "See also"}, {"pid": "c4fdb4a8f2a04550b9d2e5e03c3ca9ab", "name": "References"}, {"pid": "b22dab1da5c14c5a8a83c30b93c126c4", "name": "Further points"}, {"pid": "6fa6772a9a1341e99ca81f4143209afb", "name": "External references"}], "name": "Government of India"}';

$(window).bind('pageshow', function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload();
    }
});

$( document ).ready(function() {
  treeJSON = d3.json("./assets/flare.json", function(error, treeData) {

      var treeData;
      treeData = JSON.parse(data);
      // Calculate total nodes, max label length
      var totalNodes = 0;
      var maxLabelLength = 0;
      // variables for drag/drop
      var selectedNode = null;
      var draggingNode = null;
      // panning variables
      var panSpeed = 200;
      var panBoundary = 20; // Within 20px from edges will pan when dragging.
      // Misc. variables
      var i = 0;
      var duration = 750;
      var root;

      // size of the diagram

      var elem = document.getElementById('con1');

      var viewerWidth = $( window ).width() ;
      var viewerHeight = $( window ).height()/1.5 ;

      var tree = d3.layout.tree()
          .size([viewerHeight, viewerWidth]);

      // define a d3 diagonal projection for use by the node paths later on.
      var diagonal = d3.svg.diagonal()
          .projection(function(d) {
              return [d.y, d.x];
          });

      // A recursive helper function for performing some setup by walking through all nodes

      function visit(parent, visitFn, childrenFn) {
          if (!parent) return;

          visitFn(parent);

          var children = childrenFn(parent);
          if (children) {
              var count = children.length;
              for (var i = 0; i < count; i++) {
                  visit(children[i], visitFn, childrenFn);
              }
          }
      }

      // Call visit function to establish maxLabelLength
      visit(treeData, function(d) {
          totalNodes++;
          maxLabelLength = Math.max(d.name.length, maxLabelLength);

      }, function(d) {
          return d.children && d.children.length > 0 ? d.children : null;
      });


      // sort the tree according to the node names

      function sortTree() {
          tree.sort(function(a, b) {
              return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
          });
      }
      // Sort the tree initially incase the JSON isn't in a sorted order.
      sortTree();

      // TODO: Pan function, can be better implemented.

      function pan(domNode, direction) {
          var speed = panSpeed;
          if (panTimer) {
              clearTimeout(panTimer);
              translateCoords = d3.transform(svgGroup.attr("transform"));
              if (direction == 'left' || direction == 'right') {
                  translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                  translateY = translateCoords.translate[1];
              } else if (direction == 'up' || direction == 'down') {
                  translateX = translateCoords.translate[0];
                  translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
              }
              scaleX = translateCoords.scale[0];
              scaleY = translateCoords.scale[1];
              scale = zoomListener.scale();
              svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
              d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
              zoomListener.scale(zoomListener.scale());
              zoomListener.translate([translateX, translateY]);
              panTimer = setTimeout(function() {
                  pan(domNode, speed, direction);
              }, 50);
          }
      }

      // Define the zoom function for the zoomable tree

      function zoom() {
          svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
      }


      // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
      var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

      function initiateDrag(d, domNode) {
          draggingNode = d;
          d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
          d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
          d3.select(domNode).attr('class', 'node activeDrag');

          svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
              if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
              else return -1; // a is the hovered element, bring "a" to the front
          });
          // if nodes has children, remove the links and nodes
          if (nodes.length > 1) {
              // remove link paths
              links = tree.links(nodes);
              nodePaths = svgGroup.selectAll("path.link")
                  .data(links, function(d) {
                      return d.target.id;
                  }).remove();
              // remove child nodes
              nodesExit = svgGroup.selectAll("g.node")
                  .data(nodes, function(d) {
                      return d.id;
                  }).filter(function(d, i) {
                      if (d.id == draggingNode.id) {
                          return false;
                      }
                      return true;
                  }).remove();
          }

          // remove parent link
          parentLink = tree.links(tree.nodes(draggingNode.parent));
          svgGroup.selectAll('path.link').filter(function(d, i) {
              if (d.target.id == draggingNode.id) {
                  return true;
              }
              return false;
          }).remove();

          dragStarted = null;
      }

      // define the baseSvg, attaching a class for styling and the zoomListener
      var baseSvg = d3.select("#tree-container").append("svg")
          .attr("width", viewerWidth)
          .attr("height", viewerHeight)
          .attr("class", "overlay")
          .call(zoomListener);
       
       
       
         

      // Helper functions for collapsing and expanding nodes.

      function collapse(d) {
          if (d.children) {
              d._children = d.children;
              d._children.forEach(collapse);
              d.children = null;
          }
      }
      

      function expand(d) {
          if (d._children) {
              d.children = d._children;
              d.children.forEach(expand);
              d._children = null;
          }
      }

      var overCircle = function(d) {
          selectedNode = d;
          updateTempConnector();
      };
      var outCircle = function(d) {
          selectedNode = null;
          updateTempConnector();
      };

      // Function to update the temporary connector indicating dragging affiliation
      var updateTempConnector = function() {
          var data = [];
          if (draggingNode !== null && selectedNode !== null) {
              // have to flip the source coordinates since we did this for the existing connectors on the original tree
              data = [{
                  source: {
                      x: selectedNode.y0,
                      y: selectedNode.x0
                  },
                  target: {
                      x: draggingNode.y0,
                      y: draggingNode.x0
                  }
              }];
          }
          var link = svgGroup.selectAll(".templink").data(data);

          link.enter().append("path")
              .attr("class", "templink")
              .attr("d", d3.svg.diagonal())
              .attr('pointer-events', 'none');

          link.attr("d", d3.svg.diagonal());

          link.exit().remove();
      };

      // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

      function centerNode(source) {
          scale = zoomListener.scale();
          x = -source.y0;
          y = -source.x0;
          x = x * scale + viewerWidth /4;
          y = y * scale + viewerHeight / 2.5;
          d3.select('g').transition()
              .duration(duration)
              .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
          zoomListener.scale(scale);
          zoomListener.translate([x, y]);
      }

      // Toggle children function

      function toggleChildren(d) {
          if (d.children) {
              d._children = d.children;
              d.children = null;
          } else if (d._children) {
              d.children = d._children;
              d._children = null;
          }
          return d;
      }

      // Toggle children on click.

      function click(d) {
        var root = 'https://jsonplaceholder.typicode.com';
          window.val = d;
          // console.log(window.val);
          // $.ajax({
          //   url: root + '/posts/1',
          //   method: 'GET'
          // }).then(function(data) {
          //   console.log(data);
          // });

          if (d3.event.defaultPrevented) return; // click suppressed
          d = toggleChildren(d);
          update(d);
          // centerNode(d);
      }

      function update(source) {
          // Compute the new height, function counts total children of root node and sets tree height accordingly.
          // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
          // This makes the layout more consistent.
          var levelWidth = [1];
          var childCount = function(level, n) {

              if (n.children && n.children.length > 0) {
                  if (levelWidth.length <= level + 1) levelWidth.push(0);

                  levelWidth[level + 1] += n.children.length;
                  n.children.forEach(function(d) {
                      childCount(level + 1, d);
                  });
              }
          };
          childCount(0, root);
          var newHeight = d3.max(levelWidth) * 40; // 25 pixels per line
          tree = tree.size([newHeight, viewerWidth]);

          // Compute the new tree layout.
          var nodes = tree.nodes(root).reverse(),
              links = tree.links(nodes);

          // Set widths between levels based on maxLabelLength.
          nodes.forEach(function(d) {
              d.y = (d.depth * (maxLabelLength * 8)); //maxLabelLength * 10px
              // alternatively to keep a fixed scale one can set a fixed depth per level
              // Normalize for fixed-depth by commenting out below line
              // d.y = (d.depth * 500); //500px per level.
          });

          // Update the nodes…
          node = svgGroup.selectAll("g.node")
              .data(nodes, function(d) {
                  return d.id || (d.id = ++i);
              });

          // Enter any new nodes at the parent's previous position.
          var nodeEnter = node.enter().append("g")
              .attr("class", "node")
              .attr("transform", function(d) {
                  return "translate(" + source.y0 + "," + source.x0 + ")";
              })
              .on('click', click);

          nodeEnter.append("circle")
              .attr('class', 'nodeCircle')
              .attr("r", 0)
              .style("fill", function(d) {
                  return d._children ? "lightsteelblue" : "#fff";
              });

          nodeEnter.append("text")
              .attr("x", function(d) {
                  return d.children || d._children ? -10 : 10;
              })
              .attr("dy", ".35em")
              .attr('class', 'nodeText')
              .attr("text-anchor", function(d) {
                  return d.children || d._children ? "end" : "start";
              })
              .text(function(d) {
                  return d.name;
              })
              .style("fill-opacity", 0);

          // phantom node to give us mouseover in a radius around it
          nodeEnter.append("circle")
              .attr('class', 'ghostCircle')
              .attr("r", 30)
              .attr("opacity", 0.2) // change this to zero to hide the target area
          .style("fill", "red")
              .attr('pointer-events', 'mouseover')
              .on("mouseover", function(node) {
                  overCircle(node);
              })
              .on("mouseout", function(node) {
                  outCircle(node);
              });

          // Update the text to reflect whether node has children or not.
          node.select('text')
              .attr("x", function(d) {
                  return d.children || d._children ? -10 : 10;
              })
              .attr("text-anchor", function(d) {
                  return d.children || d._children ? "end" : "start";
              })
              .text(function(d) {
                  return d.name;
              });

          // Change the circle fill depending on whether it has children and is collapsed
          node.select("circle.nodeCircle")
              .attr("r", 4.5)
              .style("fill", function(d) {
                  return d._children ? "#8272c3" : "#fff";
              });

          // Transition nodes to their new position.
          var nodeUpdate = node.transition()
              .duration(duration)
              .attr("transform", function(d) {
                  return "translate(" + d.y + "," + d.x + ")";
              });

          // Fade the text in
          nodeUpdate.select("text")
              .style("color", '#444')
              .style("fill-opacity",1);

          // Transition exiting nodes to the parent's new position.
          var nodeExit = node.exit().transition()
              .duration(duration)
              .attr("transform", function(d) {
                  return "translate(" + source.y + "," + source.x + ")";
              })
              .remove();

          nodeExit.select("circle")
              .attr("r", 0);

          nodeExit.select("text")
              .style("fill-opacity", 0);

          // Update the links…
          var link = svgGroup.selectAll("path.link")
              .data(links, function(d) {
                  return d.target.id;
              });

          // Enter any new links at the parent's previous position.
          link.enter().insert("path", "g")
              .attr("class", "link")
              .attr("d", function(d) {
                  var o = {
                      x: source.x0,
                      y: source.y0
                  };
                  return diagonal({
                      source: o,
                      target: o
                  });
              });

          // Transition links to their new position.
          link.transition()
              .duration(duration)
              .attr("d", diagonal);

          // Transition exiting nodes to the parent's new position.
          link.exit().transition()
              .duration(duration)
              .attr("d", function(d) {
                  var o = {
                      x: source.x,
                      y: source.y
                  };
                  return diagonal({
                      source: o,
                      target: o
                  });
              })
              .remove();

          // Stash the old positions for transition.
          nodes.forEach(function(d) {
              d.x0 = d.x;
              d.y0 = d.y;
          });
      }

      // Append a group which holds all nodes and which the zoom Listener can act upon.
      var svgGroup = baseSvg.append("g");

      // Define the root
      root = treeData;
      root.x0 = (viewerHeight / 2);
      root.y0 = 0;

      // Layout the tree initially and center on the root node.
      update(root);
      centerNode(root);

    var couplingParent1 = tree.nodes(root).filter(function(d) {
              return d['name'] === 'cluster';
          })[0];
    var couplingChild1 = tree.nodes(root).filter(function(d) {
              return d['name'] === 'JSONConverter';
          })[0];

    multiParents = [{
                      parent: couplingParent1,
                      child: couplingChild1
                  }];

    multiParents.forEach(function(multiPair) {
              svgGroup.append("path", "g")
              .attr("class", "additionalParentLink")
                  .attr("d", function() {
                      var oTarget = {

                        // *************************Dont know what is this *******************************

                           x: 20, //multiPair.parent.x0,
                           y: 20 //multiPair.parent.y0
                      };
                      var oSource = {
                           x: 20, // multiPair.child.x0,
                           y: 20 // multiPair.child.y0
                      };
                      /*if (multiPair.child.depth === multiPair.couplingParent1.depth) {
                          return "M" + oSource.y + " " + oSource.x + " L" + (oTarget.y + ((Math.abs((oTarget.x - oSource.x))) * 0.25)) + " " + oTarget.x + " " + oTarget.y + " " + oTarget.x;
                      }*/
                      return diagonal({
                          source: oSource,
                          target: oTarget
                      });
                  });
          });
  });

});
