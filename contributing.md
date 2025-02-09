# Contributing to the wiki
Contributions are welcome and encouraged.

Meshtastic is built on people collaborating and working together and we strive to continue that in this wiki.

Please fully read the contributing guide before contributing, failure to do so can have your pull request denied and you can be banned from contributing.

# Code of Conduct
We take our community seriously and hold ourselves and other contributors to high standards of communication. By participating and contributing to this project, you agree to uphold our Code of Conduct.

We have a zero tolerance for any demeaning/derogatory/hurtful wording in the repo or towards anyone else.
If you participate in this behaviour you will be banned.

# Language and wording
Please adhere to the following guidelines when writing documentation.
As long as you don't go against the code of conduct no actions will be taken against you.
However, you will be asked to make some changes to your pull request before it will be accepted.

1. Make sure your writing is polite and respectful
2. Please keep language gender neutral
3. If you link to any external resources make sure they aline with our code of conduct

# Getting Started
This wiki is built with [NextJS](https://nextjs.org/) and will require [Node JS](https://nodejs.org/en/download) to work with.

Once you have [Node JS](https://nodejs.org/en/download) make a [fork of the repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) and [clone your fork do your computer](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

Now that you have a copy of the repository on your computer you will need to open the folder in a terminal and run `npm i`.

Once all dependancies are installed you can use `npm run dev` to build and view the vebsite localy.

After making all the changes you want you should test the changes, to test run `npm run test` and `npm run build` to make sure there are no issues.

When you are happy with your changes you will need to [add](https://github.com/git-guides/git-add), [commit](https://github.com/git-guides/git-commit) and [push](https://github.com/git-guides/git-push) your changes to your repo, then create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for a community manager to approve.

Once approved and merged into the main repo the website will automatically be updated with the changes.

# Contributing to Community Nodes
The community node details are located in [/src/components/communitynodes.ts](https://github.com/Canberra-Meshtastic/main-site/blob/main/src/components/communitynodes.ts).

Edit CommunityNodes to add/update details.

If you are adding a new node you will need to add a .avif image to [/public/img/nodes](https://github.com/Canberra-Meshtastic/main-site/tree/main/public/img/nodes), you can use [Gimp](https://www.gimp.org/) to export images to .avif.

Once changes are run `npm run test` before commiting changes, it will check that naming conventions and required files are correct.

> [!CAUTION]
> When updating maintainers we may reach out to existing or new maintainers to confirm the change and contact details are correct