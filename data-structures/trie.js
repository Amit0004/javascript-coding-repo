class Node {
  constructor(value) {
    this.value = value;
    this.endOfWord = false; // false by default
    this.children = {}; // key is letter, value is TrieNode for that letter
  }
}

/**
 * Link: https://stackfull.dev/trie-in-javascript-the-data-structure-behind-autocomplete
 */

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  /**
   * Time complexity: O(n)
   * @param {T} word
   */
  insert(word) {
    // TODO: Implement
    let current = this.root;

    // iterate through all the characters of the word
    for (let character of word) {
      // if node doesn't have the current character as child, insert it
      if (!current || current?.children[character] === undefined) {
        current.children[character] = new Node(character);
      }

      // move down to insert
      current = current.children[character];
    }

    // mark isEndOfWord true
    current.endOfWord = true;
  }

  /**
   * Time Complexity: O(n)
   * @param {*} word
   * @returns
   */
  search(word) {
    let current = this.root;
    for (let character of word) {
      if (!current || current?.children[character] === undefined) {
        // not found return false
        return false;
      }

      // move down to search
      current = current?.children[character];
    }

    // found all the character, return true if this is last word of the character.
    return current.endOfWord;
  }
}

const trie = new Trie();

// insert few words
trie.insert("CAT");
trie.insert("DOG");
trie.insert("MAT");

// search something
console.log(trie.search("MA")); // false
console.log(trie.search("DO"));
