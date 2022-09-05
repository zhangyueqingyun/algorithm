const {BLACK, RED} = require('./Node');

module.exports = function del(tree, node) 
{
    const {left, right} = node;
    let {color} = node;
    let fixupNode;

    if(!left || !right) 
    {
        fixupNode = left || right;
        transplant(tree, node, fixupNode);
    }
    else 
    {
        const next = minimum(node.right);
        color = next;
        fixupNode = next.right;                                                                                                                                                                                     
        if(next.parent !== node)
        {
            transplant(tree, next, next.right);
        }

        next.right = right;
        right.parent = next;
        next.left = left;
        left.parent = next;
        next.color = node.color;
        
        transplant(tree, node, next);
    }

    if(color === BLACK) 
    {
        fixup(tree, fixupNode);
    }
}

function minimum(node) {
    while(node.left) {
        node = node.left;
    }
    return node;
}

function fixup(tree, fixupNode)
{
    while(fixupNode !== tree.root && fixupNode.color !== BLACK)
    {
        const {parent} = fixupNode;
        const [key, brotherKey] = parent.left === fixupNode ? ['left', 'right'] : ['right', 'left'];
        const brother = parent[brotherKey];

        if(brother.color === RED)
        {
            parent.color = RED;
            brother.color = BLACK;
            
            if(key === 'left') 
                leftRotate(root, parent);
            else 
                rightRotate(root, parent);
        }
        else if (brother[key].color === BLACK && brother[uncleKey].color === BLACK) 
        {
            brother.color = RED;
            fixupNode = parent;

        }
        else if (brother[key].color === RED && brother[uncleKey].color === BLACK)
        {
            brother.color = RED;
            brother[key].color = BLACK;
            if(key === 'left')
                rightRotate(tree, brother);
            else 
                leftRotate(tree, brother);
        }
        else if (brother.right.color === RED)
        {
            brother.color = parent.color;
            parent.color = BLACK;
            brother[uncleKey].color = BLACK;
            if(key === 'left')
                leftRotate(tree, parent);
            else 
                rightRotate(tree, parent);
            fixupNode = tree.root;
        }
    }
}

function leftRotate(tree, node)
{
    const {right, parent} = node;
    node.right = right.left;

    right?.left && (right.left.parent = node);
    right.parent = parent;

    if(!parent)
    {   
        tree.root = right; 
    }
    else
    { 
        const key = parent.left === node ? 'left' : 'right';
        parent[key] = right;
    }

    right.left = node;
    node.parent = right;
}

function rightRotate(tree, node)
{
    const {left, parent} = node;
    node.left = left.right;

    if(!parent)
    {
        tree.root = left;
    }
    else 
    {
        const key = parent.left === node ? 'left' : 'right';
        parent[key] = left;
    }
    left.right = node;
    node.parent = left;
}

function transplant(tree, aNode, bNode) 
{
    const {parent} = aNode;
    if(!parent) 
    {
        tree.root = bNode;
    }
    else 
    {
        const key = parent.left === aNode ? 'left' : 'right';
        parent[key] = bNode;
    }
    
    bNode && (bNode.parent = parent);
}