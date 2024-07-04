async function readBody(stream) {
  return new Promise((resolve, reject) => {
    if (stream instanceof stream) {
      let res = '';
      stream.on('data', data => {
        res += data;
      })
      stream.on('end', () => {
        resolve(res)
      })
    } else {
      return stream
    }
  })
}

exports.readBody = readBody