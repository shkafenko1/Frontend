function createNode(value)
{
    return{
        value,
        left: null,
        right: null,
    }
}

function insert(root, value)
{
    if (root === null)
    {
        return createNode(value);
    }

    if(value > root.value)
    {
        root.right = insert(root.right, value);
    }
    else if(value < root.value)
    {
        root.left = insert(root.left, value);
    }
    return root;
}

function deleteNode(root, value)
{
    if (root === null)
    {
        console.log("empty or no such value!");
    }

    if (value < root.value)
    {
        root.left = deleteNode(root.left, value);
    }
    else if(value > root.value)
    {
        root.right = deleteNode(root.right, value);
    }
    else
    {
        root = null;
    }
    return root;
}

function inOrderTraversal(root)
{
    if (root != null)
    {
        inOrderTraversal(root.left);
        console.log(root.value, " ");
        inOrderTraversal(root.right);
    }
}

function reverseTraversal(root)
{
    if (root != null)
    {
        reverseTraversal(root.right);
        console.log(root.value, " ");
        reverseTraversal(root.left);
    }
}

function straightTraversal(root)
{
    if (root != null)
    {
        console.log(root.value, " ");
        straightTraversal(root.left);
        straightTraversal(root.right);
    }
}

let root = null;

root = insert(root, 5);
root = insert(root, 10);
root = insert(root, -50);
root = insert(root, 5);
root = insert(root, 15);

inOrderTraversal(root);

reverseTraversal(root);

straightTraversal(root);

deleteNode(root, 10);

