/* exported getAreaOfCircle */
/**
 * Returns the area of a circle with the given radius.
 * Recall the area = pi*r^2
 *
 * @param {number} radius The length of the line starting from the center of the circle to the edge.
 * @returns The area of a circle with the given radius.
 */
function getAreaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
