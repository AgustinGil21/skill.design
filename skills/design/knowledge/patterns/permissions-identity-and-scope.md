# Permissions, identity and scope

Permissions decide who can see and do what. Most products start with a simple model (owner, member) and grow into a
complex one (roles, groups, inherited access, guests, delegation, organization policies). The design challenge is to
make **effective access** — what a person can actually do right now, and why — understandable to the people who manage
it and predictable for the people subject to it.

See also [triage, roles and celebrations](triage-roles-and-celebrations.md) for role matrices and
[file upload and sharing](file-upload-and-sharing.md) for sharing dialogs.

## The problem and who has it

- **Administrators** granting and revoking access for many people.
- **Owners of content** sharing with colleagues, guests and the public.
- **Members** trying to understand why they cannot see or do something.
- **Security and compliance teams** auditing access.

When permissions fail: data leaks to people who should not see it, people are blocked from their work, nobody knows why
access exists, and removing someone leaves access behind.

## Questions to ask before deciding

- **What are the resources** (workspaces, projects, documents, records, fields) and their hierarchy?
- **What are the actions** (view, comment, edit, share, delete, administer, pay)?
- **How is access granted**: directly to people, to groups, by role, by link, by domain, by inheritance?
- **Who can grant access**, and can they grant more than they have?
- **What happens when someone leaves** a team or the organization?
- **Are there external people** (guests, clients, contractors)?
- **Is delegation needed** (an assistant acting for an executive, support acting for a customer)?

## The model, written down

Before designing screens, write the model:

```
Organization ──< Workspace ──< Project ──< Document
Roles per workspace: Owner, Admin, Member, Guest
Project access: inherited from workspace, or restricted to listed people/groups
Document sharing: inherits project access; can add people or a link
Actions: view, comment, edit, share, delete, manage access
```

A model that cannot be written in a few lines will not be understood by people using it.

## Concepts people need to understand

| Concept | What it means | How to show it |
| --- | --- | --- |
| **Direct access** | Granted to this person on this resource | Listed by name |
| **Group access** | Granted through a group | "Through 'Design team'" |
| **Inherited access** | Comes from a parent (folder, project) | "From project 'Rebrand'" with a link |
| **Role** | A named set of permissions | Role name with description |
| **Effective access** | The combination of all of the above | "Laila can edit (from 'Design team')" |
| **Restriction** | Overrides inheritance to limit access | "Only listed people can access this project" |
| **Policy** | Organization rule that limits what can be granted | "Public links are disabled by your organization" |

## Anatomy and behavior

### Showing effective access

- On any resource, "Who has access" lists people and groups with their level and **where it comes from**.
- On a person, "What can they access" summarizes their roles and the main resources.
- **"Why can't I…?"**: when an action is unavailable, say why and who can change it ("You have view access. Ask Marco,
  the project owner, for edit access · Request access").

### Granting access

- Choose people or groups, choose a level with a description, confirm.
- **Preview the effect** of broad grants: "Giving the 'All staff' group edit access affects 240 people."
- **Prevent escalation**: people cannot grant more access than they have, unless they are admins.
- **External people** marked as such, with domain shown ("ana@client.pt · External").

### Revoking access

- **Show what will be lost** before removing, and whether the person will still have access through other paths ("Laila
  will still have view access through 'Design team'").
- **Revoking during an active session**: the person's open views update; unsaved work is preserved where possible, with
  an explanation.
- **Offboarding**: when someone leaves, list what they own and transfer ownership before removing them.

### Delegation

- Delegated actions are recorded as "Marco on behalf of Laila".
- Delegation has a scope and an end date.
- The person who delegated can see what was done.

### Restricted vs. open by default

| Default | Good for | Risk |
| --- | --- | --- |
| Open within the workspace | Collaboration, small teams | Overexposure of sensitive content |
| Restricted (only invited) | Sensitive content, large organizations | Friction, "request access" loops |

Choose per resource type, and make the default visible when creating content ("This project is visible to everyone in
Lisboa Coffee · Change").

## States and transitions

- Access requested, pending approval, granted, denied (with reason), expired.
- Access lost mid-task: explain and offer a way to request it back.
- Pending invitations as their own state.
- Policy changes by admins: notify affected people.

## Edge cases

- People with access through several paths at different levels (the highest usually wins; say so).
- Removing a group that grants access to many resources.
- Deleted groups or roles that resources depended on.
- Ownership by people who left the organization.
- Links shared before restrictions were added.

## Accessibility specifics

- Access lists as tables or lists with clear labels; levels in text.
- Role descriptions available to screen readers in selectors.
- "Request access" and error explanations reachable by keyboard.

## Copy

- Levels described by what people can do, not by internal names.
- "Why" explanations specific: the source of access and the person who can change it.
- External and policy labels unambiguous.

## Common mistakes and why they happen

- **Invisible inheritance**: people think they removed access, but it remains through a group.
- **"Access denied" with no explanation** — the system knows why but does not say.
- **Broad grants without preview.**
- **No offboarding flow**: orphaned content and lingering access.
- **Delegated actions recorded as the delegate.**

## Worked comparison: removing a contractor

**Weak.** An admin removes Ana from the project's member list. Ana still has edit access through a document shared
directly and through a public link created months ago. Nobody knows.

**Strong.** Removing Ana shows: "Ana will lose access to 'Rebrand'. She will keep access to: 'Brand guidelines' (shared
directly, edit), and 3 documents via a public link created by Ana. Remove all access? · Review individually." The admin
removes everything; Ana's owned documents are transferred to the project owner.

## How to verify and measure

- **Test** with administrators: can they answer "who can see this?" and "why can Laila edit this?" quickly and
  correctly?
- **Audit** periodically for public links, external access and orphaned ownership.
- **Measure** access requests (friction), revocations of unexpected access (overexposure), support tickets about
  access.
