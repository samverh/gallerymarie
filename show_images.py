import os


# folder_path = "images/under_your_feet/" 
folder_path = "images/state_of_decay-bioscoop/" 

def list_files(folder):
    for root, dirs, files in os.walk(folder):
        for file in files:
            file_path = os.path.join(root, file)
            print(f'"{file_path}",')


list_files(folder_path)
