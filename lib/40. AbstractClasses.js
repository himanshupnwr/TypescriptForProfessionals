"use strict";
class Command {
    execute() {
        console.log('Executeing:', this.commandLine());
    }
}
class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard';
    }
}
class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --all';
    }
}
//new Command(); //Error: cannot create and instance of an abstract class
