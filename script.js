document.getElementById('text-input').addEventListener('input', function() {
    const text = this.value;
    
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const charCount = text.length;
    const sentenceCount = (text.match(/[\w|\)][.?!](\s|$)/g) || []).length;
    const paragraphCount = text.split(/\n+/).filter(paragraph => paragraph.length > 0).length;
    
    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
    document.getElementById('sentence-count').textContent = sentenceCount;
    document.getElementById('paragraph-count').textContent = paragraphCount;
});