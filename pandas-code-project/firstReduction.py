#~2300 words after first reduction
#import pandas library
import pandas as pd

#create a data object with the data from excel file in desktop filepath
data = pd.read_excel('C:/Users/Astro/Desktop/data.xlsx')

#remove all rows in data with less than 3 words in the 'Review' column
data = data[data['Review'].str.split().str.len() > 3]

#add data into a new excel file and save it to desktop
data.to_excel('C:/Users/Astro/Desktop/reduce1.xlsx', index=False)

#show the new excel file in file explorer
import subprocess
subprocess.Popen(r'explorer /select,"C:\Users\Astro\Desktop\reduce1.xlsx"')



#display the data
print(data)

