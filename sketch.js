/*
 * Color scheme to use
 * Values: More can be found in colors.js
 * Default: '80s-purple'
 */
const PALLETE = '80s-purple'

/*
 * Thickness of the lines
 * Default: 5
 */
const STROKE_WEIGHT = 5

/*
 * Minimum distance a new node can travel
 * Default: 100
 */
const MIN_DIST = 100

/*
 * Max distance a new node can travel
 * Default: 300
 */
const MAX_DIST = 300

/*
 * Higher value = less overlap of branches
 * Values: 0 - 360
 * Default: 45
 */
const MARGIN = 45

/*
 * Restricts the range in degrees that new branches can be made off of a Node
 * Values: 0 - 360
 * Default: 180
 */
const RESTRICT = 180


function setup() {

  //Data
  populateColors()

  //Settings
  createCanvas(2000, 2000)

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
  background(getBackgroundColor())

}

function draw() {

  // Configurable
  let radius = 70
  let branches = 4

  new Node(width/2, height/2, radius, branches, 1).render()
}
