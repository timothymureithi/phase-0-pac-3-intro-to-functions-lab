
function shout(string) {
    return string.toUpperCase();
  }
  describe('shout(string)', function() {
    it('receives one argument and returns it in all caps', function() {
      expect(shout('hello')).toEqual('HELLO');
    })
  })


function whisper(string) {
    return string.toLowerCase();
  }
  describe('whisper(string)', function() {
    it('receives one argument and returns it in all lowercase', function() {
      expect(whisper('HELLO')).toEqual('hello');
    })
  })

  function logShout(string){
    uppercase = string.toUpperCase()
    string = uppercase;
    console.log(uppercase);}

    function logWhisper(string){
        lowercase = string.toLowerCase()
        string = lowercase;
        console.log(lowercase);
      }
    