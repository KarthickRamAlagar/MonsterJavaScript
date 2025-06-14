# Windows Command Prompt: Folder & File Operations

This guide covers basic commands for creating, deleting, renaming, and moving files and folders using the Windows command prompt (such as in VS Code's terminal).

---

## Folder Creation

**Explanation:**  
Create a new folder in the current directory.

**Command:**
```
mkdir folder_name
```
---

## File Creation

**Explanation:**  
Navigate into the folder and create a new file.

**Commands:**
```
cd folder_name
echo. > file_name.extension
```
---

## Delete a Particular File in a Folder

**Explanation:**  
Delete a specific file inside a folder.  
Navigate to main folder and then grab the command.

**Command:**
```
del folder_name\file_name.extension
```
---

## Delete a Folder and All Its Contents

**Explanation:**  
Delete a folder and everything inside it.

**Command:**
```
rmdir /s /q folder_name
```
- `/s` deletes all files and subfolders inside.
- `/q` runs the command without asking for confirmation.

---

## Rename a File

**Explanation:**  
Change the name of a file.

**Command:**
```
ren oldfile_name.extension newfile_name.extension
```
---

## Rename a Folder

**Explanation:**  
Change the name of a folder.

**Command:**
```
ren oldfolder_name newfolder_name
```
---

## Move a File to Another Folder

**Explanation:**  
Move a file from one folder to another.  
Navigate to main folder and then grab the command.

**Command:**
```
move sourceFolder\filename.extension destinationFolder\
```
---

## 📋 Command Summary Table

| Operation                | Command Example                                      |
|--------------------------|------------------------------------------------------|
| Create folder            | `mkdir folder_name`                                  |
| Create file              | `echo. > file_name.extension`                        |
| Delete file              | `del folder_name\file_name.extension`                |
| Delete folder (all)      | `rmdir /s /q folder_name`                            |
| Rename file              | `ren oldfile_name.extension newfile_name.extension`  |
| Rename folder            | `ren oldfolder_name newfolder_name`                  |
| Move file to folder      | `move sourceFolder\filename.extension destinationFolder\` |

---