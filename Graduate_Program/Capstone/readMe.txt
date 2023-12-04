Download and Install Python; we used interpreter version 3.11

Open the folder with source code in it, in an IDE of your choice; Pycharm preferable.

Download and install dependencies; Pycharm with give you quickfix options for this, 
otherwise you can manually download and install using PiP (which is typically installed with Python).

There are only 2 Python source code files.

The dependencies in 'main.py' are:
	import ctypes
	import os
	import sys
	from enum import Enum
	import cv2
	import qdarktheme
	from PyQt5.QtCore import Qt
	from PyQt5.QtGui import QImage, QPixmap
	from PyQt5.QtWidgets import QApplication, QComboBox, QVBoxLayout, QLabel, QProgressBar, QPushButton, \
		QFileDialog, QHBoxLayout, QWidget, QScrollArea, QMainWindow

	from videoProcessor import videoProcessor (the 2nd Py file)

The dependencies in 'videoProcessor.py' are:
	import csv
	import os
	import re
	import cv2
	import easyocr
	import numpy as np
	from PyQt5.QtWidgets import QApplication

Open 'main.py' and click run in your IDE. 
(From this point you can refer to the User Guide for more details)

A UI will appear when the program runs; select and process video files of your choice.