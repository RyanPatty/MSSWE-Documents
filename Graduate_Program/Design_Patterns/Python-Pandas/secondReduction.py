#~500 words after second reduction
#import pandas library
import pandas as pd

#create a data object with the data from excel file
data = pd.read_excel('C:/Users/Astro/Desktop/reduce1.xlsx')

#reduction 2
data = data[data['Review'].str.contains('wish|want|help|please|broke|feature|perform|new|fix|bug|lost|add|comp|better|problem|hope|upgrade|competitors|additional|more|extra', case=False)]


#add data into a new excel file and save it to desktop
data.to_excel('C:/Users/Astro/Desktop/reduce2.xlsx', index=False)


#show the new excel file in file explorer
import subprocess

subprocess.Popen(r'explorer /select,"C:\Users\Astro\Desktop\reduce2.xlsx"')



#display the data
print(data)

