class Node {

	constructor(xPos, yPos, radius, branches, generation) {
		this.xPos = xPos
		this.yPos = yPos
		this.radius = radius
		this.branches = branches
		this.generation = generation

		// Alternate colors on each generation
		this.color = (generation % 2 == 0 ? getColors()[0] : getColors()[1])
	}

	render() {
		noFill()
		strokeWeight(STROKE_WEIGHT)
		stroke(this.color)
		circle(this.xPos, this.yPos, this.radius)	

		for(let i = 0; i < this.branches; i++) {

			// adjust for user-friendly config
			let restrictAdj = RESTRICT/4

			let degree = random((0 + MARGIN) + (restrictAdj*i), (90 - MARGIN) + (restrictAdj*i))
			let distance = random(MIN_DIST, MAX_DIST)

			// Adjust to go to the edge of the circle, not center
			let adj = this.radius/2

			pushPop(() => {

				let newRadius = int(random(this.radius-30, this.radius))
				translate(this.xPos, this.yPos)
				rotate(degree)
				line(adj, adj, distance + newRadius/2, distance + newRadius/2)

				// Recursive node that renders and branches off, making sure end case exists (this.branches-1)
				new Node(distance+adj, distance+adj, newRadius, int(random(0, this.branches)), this.generation+1).render()

			})
		}
	}

}