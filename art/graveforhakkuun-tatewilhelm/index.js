/*
@title: Grave For Hakkuun
@author: tatewilhelm
@snapshot: image.png
*/

const width = 125
const height = 125
const coffset = bt.randInRange(0,60) // change this to move the cloud, otherwise its random
setDocDimensions(width, height)


const cloud1 = bt.catmullRom([
  [coffset + 20, 81 + 10],
  [coffset + 9, 82 + 10],
  [coffset + 9, 92 + 10],
  [coffset + 19, 95 + 10]
])
const cloud2 = bt.catmullRom([
  [coffset + 19, 95 + 10],
  [coffset + 20, 102 + 10],
  [coffset + 26, 104 + 10],
  [coffset + 30, 101 + 10]
])
const cloud3 = bt.catmullRom([
  [coffset + 30, 101 + 10],
  [coffset + 34, 113 + 10],
  [coffset + 46, 112 + 10],
  [coffset + 50, 101 + 10]
])
const cloud4 = bt.catmullRom([
  [coffset + 50, 101 + 10],
  [coffset + 59, 105 + 10],
  [coffset + 66, 97 + 10],
  [coffset + 60, 88 + 10]
])
const cloud5 = bt.catmullRom([
  [coffset + 60, 88 + 10],
  [coffset + 49, 82 + 10],
  [coffset + 20, 81 + 10]
])


const ground = bt.catmullRom([
  [0, 20], [125, 20]
  ])

const gravewallleft = bt.catmullRom([
  [47, 20],
  [47, 50]
])
const gravewallright = bt.catmullRom([
  [77, 20],
  [77, 50]
])
const gravetop = bt.catmullRom([
    [47, 50],
    [53, 58],
    [62, 60],
    [71, 58],
    [77, 50]
])

const r1 = bt.catmullRom([
  [53, 39],
  [53, 50]
])
const r2 = bt.catmullRom([
  [53, 50],
  [56, 49],
  [56, 46],
  [53, 45]
])
const r3 = bt.catmullRom([
  [53, 45],
  [56, 39]
])

const i1 = bt.catmullRom([
  [60, 50],
  [65, 50]
])
const i2 = bt.catmullRom([
  [60, 39],
  [65, 39]
])
const i3 = bt.catmullRom([
  [62.5, 50],
  [62.5, 39]
])


const p1 = bt.catmullRom([
  [69, 39],
  [69, 50]
])
const p2 = bt.catmullRom([
  [69, 50],
  [72, 49],
  [72, 46],
  [69, 45]
])

drawLines([cloud1, cloud2, cloud3, cloud4, cloud5, ground, gravewallleft, gravewallright, gravetop, r1, r2, r3, i1, i2, i3, p1, p2])
