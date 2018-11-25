/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let text = new Text(maxWidth);
    
    text.parse(words);
    
    return text.toStringArr();
};

function Text (maxWidth){
    this.lines = [];
    this.currLineIndex = -1;
    
    Text.prototype.parse = parse;
    Text.prototype.toStringArr = toStringArr;
    
    function parse(words) {
        words.forEach(function(word)  {
            let line = this.lines[this.currLineIndex];
            
            if(line && line.canAddWord(word)){
                line.add(word);
           } else {
               
               // Justify current row, if exists
               if(line) {
                line.justify();    
               }
               
               // Create new row and add element to that
               this.currLineIndex++;
               line = new Line(maxWidth);
               this.lines[this.currLineIndex] = line;
               
               line.add(word);
           }
        }, this);
        
        // Justify last line
        let lastLine = this.lines[this.currLineIndex];
        lastLine.justify(true);
    }
    
    function toStringArr() {
        let result = [];
        
        this.lines.forEach(function(line) {
            result.push(line.toString());
        });
        
        return result;
    }
}
function Line (maxLen){
    this.words = [];
    this.spaces = [];   // 
    this.size = 0;   // Initial size of array
    this.maxLen = maxLen;
    
    function add(word) {
        if(this.canAddWord(word)) {
            this.words.push(word);
            this.size += word.length;
            return true;
        } else {
            return false;
        }
    }
    
    function toString() {
        let result = [];
        this.words.forEach(function(word, i) {
            result.push(word + " ".repeat(this.spaces[i]));
        }, this);
        
        return result.join("");
    }
    
    function justify(isLastLine) {
        let spacesCount = this.words.length - 1;
        let extraSpaces = this.maxLen - this.size;
        
        let quotient = extraSpaces / spacesCount;
        let mod = extraSpaces % spacesCount;
        
        if(isLastLine) {
            // Add one space between each word
            for(let i = 0; i < this.words.length - 1; i++) {
                this.spaces[i] = 1;
            }    
        } else {
            // Distribute (maxLen - size) in $(spacesCount) evenly
            for(let i = 0; i < this.words.length - 1; i++) {
                this.spaces[i] = quotient + ((mod-- > 0)? 1 : 0);
            }    
        }
    }
    
    function canAddWord(word) {
        return (this.size + (this.words.length - 1) + word.length <= this.maxLen)
    }
    
    Line.prototype.add=  add;
    Line.prototype.toString = toString;
    Line.prototype.justify = justify;
    Line.prototype.canAddWord = canAddWord;
}

string_to_array = function (str) {
    return str.trim().split(" ");
};

module.exports = {fullJustify, string_to_array};

