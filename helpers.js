function pushPop(func) {
	push()
		func()
	pop()
}