import { nanoid } from 'nanoid';

const createGemstoneStore = () => {
  return({
    gemstoneList: [],
    addGemstone(gemstone) {
      this.gemstoneList.push({
        gemstone,
        id: nanoid()
      })
    },
    removeGemstone(id) {
      this.gemstoneList = this.gemstoneList.filter(gemstone => gemstone.id !== id)
    }
  })
}

export default createGemstoneStore