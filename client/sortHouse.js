const sortHouse = answer => {
  return answer
    .reduce((accum, currentValue) => {
      const found = accum.find(element => element.house === currentValue)
      if (!found) {
        accum.push({ house: currentValue, count: 1 })
      } else {
        ++found.count
      }
      return accum
    }, [])
    .sort((a, b) => b.count - a.count)[0].house
}

export default sortHouse
