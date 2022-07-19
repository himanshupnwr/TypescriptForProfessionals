abstract class Command {
    abstract commandLine():string

    execute()
    {
        console.log('Executeing:', this.commandLine());
    }
}

class GitResetCommand extends Command
{
    commandLine(): string {
        return 'git reset --hard'
    }
}

class GitFetchCommand extends Command
{
    commandLine(): string {
        return 'git fetch --all'
    }
}

//new Command(); //Error: cannot create and instance of an abstract class