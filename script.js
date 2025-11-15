// what is git ?

// Git is a distributed version control system that allows multiple people to work on a project simultaneously without interfering with each other's changes. It tracks changes to files and directories over time, enabling users to revert to previous versions, collaborate on code, and manage different branches of development.
//  Git is widely used in software development for source code management and is the underlying technology behind platforms like GitHub and GitLab.

//  In simple words , git does version control of files ki unka alag alag checkpoints pr unka content kaisa tha and kon kon usme edit kiye.
//  Git helps you to save different versions of your code and collaborate with others easily. 

//  git commit -m ('something') -> it is used to save a check point or your changes to the local repository with a message describing what changes were made.


// commands to do : 
// 1. git init -> to initialize a git repository in your project folder
// 2. git add . -> to stage all the changes made in the project for the next commit
// 3, git commit -m "commit name" -> creating checkpoint
// 4.git remote add origin https://github.com/AtulRaj37/demo1.git -> adding remote repository (address)
// 5. git push -u origin main -> pushing your local commits to the remote repository on the main branch
function sum(a, b) {
    return a + b;
}

// git clone <repository_url> -> to copy a remote repository to your local machine
// git pull -> to fetch and merge changes from the remote repository to your local repository
// git status -> to check the status of your working directory and staging area
// git log -> to view the commit history of the repository
// git checkout <branch_name> -> to switch to a different branch

now to send the change the collaborated code from cloud ,one need to :
    1. git add . 2, git commit -m "second commit" 3. git push

now "git pull" is used to get the changed code from github

after that use " git push" for your changes to be reflected on github

Git and github is easy !!!!