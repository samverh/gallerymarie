import os


folder_path = "images/2d/drawings" 



# folder_path = "images/state_of_decay-bioscoop/" 

def list_files(folder):
    for root, dirs, files in os.walk(folder):
        for file in files:
            file_path = os.path.join(root, file.replace(r"\\", "/"))

            print(f'"{file_path}",')


list_files(folder_path)
