function potatoes(p0, w0, p1) {
    const startingDryMassPercent = (100- p0)
    const endingDryMassPercent = (100 - p1)
    
    const multiplier = endingDryMassPercent / startingDryMassPercent
    
    return Math.floor(w0 / multiplier)
}
