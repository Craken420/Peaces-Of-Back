const show = console.log
const R = require('ramda')
const { objs } = require('./02-objects')

/* Estructuras de datos definidas recursivamente */
module.exports.estrucRecur = (function () {
    
    const _isValid = val => (undefined != val) && !R.isNil(val);

    class Node {
        constructor(val) {
            this._val = val;
            this._parent = null;
            this._children = [];
        }
        isRoot() {
            return isValid(this._parent);
        }
        get children() {
            return this._children;
        }
        hasChildren() {
            return this._children.length > 0;
        }
        get value() {
            return this._val;
        }
        set value(val) {
            this._val = val;
        }
        append(child) {
            child._parent = this;
                this._children.push(child);
            return this;
        }
        toString() {
            return `Node (val: ${this._val}, children: ${this._children.length})`;
        }
    }

    class Tree {
        constructor(root) {
            this._root = root;
        }
        static map(node, fn, tree = null) {
            node.value = fn(node.value);
            if(tree === null) {
                tree = new Tree(node);
            }
            if( node.hasChildren() ) {
                R.map(node.children, function (child) {
                    Tree.map(child, fn, tree);
                });
            }
            return tree;
        }
        get root() {
            return this._root;
        }
    }
    
    function isValid (val) { return _isValid(val) }
    return {
        Node,
        Tree,
        isValid
    }
})();

/* Usage: Nodos */
    const 
        Node = this.estrucRecur.Node,
        Tree = this.estrucRecur.Tree,
        Person = objs.createPersonGetSet,
        newNodePerson = (name, lastName) => new Node( new Person(name, lastName) )

    const church    = newNodePerson('church',    'Peña') 
    const rosser    = newNodePerson('rosser',    'Peña')  
    const turing    = newNodePerson( 'turing',   'Peña')  
    const kleene    = newNodePerson('kleene',    'Peña')
    const sacks     = newNodePerson('sacks',     'Peña')
    const gandy     = newNodePerson('gandy',     'Peña')
    const nelson    = newNodePerson('nelson',    'Peña')
    const constable = newNodePerson('constable', 'Peña')
    const mendelson = newNodePerson('mendelson', 'Peña')

    church.append(rosser).append(turing).append(kleene);
    rosser.append(mendelson).append(sacks);
    turing.append(gandy);
    kleene.append(nelson).append(constable);

    // show('\n#1.1-Node:\n',
    //     '\n    church:', church.toString(),
    //     '\n    church.hasChildren: ', church.hasChildren(),
    //     '\n    church.isRoot: ', church.isRoot(), 
    //     '\n    church.value.getName: ', church.value.getName(),
    //     '\n    children:  ', church._children.join('\n\t\t') )

    // show('\n    rosser:', rosser.toString(),
    //     '\n    children:  ', rosser._children.join('\n\t\t') )

    // show('\n    turing:', turing.toString(),
    //     '\n    children:  ', turing._children.join('\n\t\t') )

    // show('\n    kleene:', kleene.toString(),
    //     '\n    children:  ', kleene._children.join('\n\t\t') )

    // show('\n    sacks:', sacks.toString(),
    //     '\n    children:  ', sacks._children.join('\n\t\t') )

    // show('\n    gandy:', gandy.toString(),
    //     '\n    children:  ', gandy._children.join('\n\t\t') )

    // show('\n    nelson:', nelson.toString(),
    //     '\n    children:  ', nelson._children.join('\n\t\t') )

    // show('\n    constable: ', constable.toString(),
    //     '\n    children:  ', constable._children.join('\n\t\t') )

    // show('\n    mendelson:', mendelson.toString(),
    //     '\n    children:  ', mendelson._children.join('\n\t\t') )

      
/* Usage: Tree */ 
    let treeMap1 = Tree.map(church, obj => obj )
    // show('\n\n#1.2.2-treeMap1:\n', treeMap1)