function transpose(song, interval){
  let sharpNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
  let flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
  return song.map(note => {
    if (note.includes('b'))
      return sharpNotes[(flatNotes.indexOf(note) + interval+flatNotes.length) % flatNotes.length]
    return sharpNotes[(sharpNotes.indexOf(note) + interval + sharpNotes.length) % sharpNotes.length]
    })
}

// https://www.codewars.com/kata/55b6a3a3c776ce185c000021
