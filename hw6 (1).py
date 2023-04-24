# File: hw6.py
# Author: Sean Fuller
# Date: 3/21/23
# Section:1001
# E-mail: Sean.fuller@maine.edu
# Description: Ask the user for the number of vertices in the graph.
# • Ask the user for the probability that there is an edge from one node to another. The probability is in the range 
# [0,1].
# • Using the two values entered by the user, the program should generate a random adjacency matrix.
# – In your code, the matrix should be stored as a two dimensional list.
# – An edge connects from one vertex to another if a random floating point number drawn from 0 to 1 is less 
# than the probability entered by the user.
# • Next the program should create an adjacency list which is equivalent to the randomly generated adjacency 
# matrix.
# – The adjacency list should be created in code using a list of lists.
# • Print both the matrix and the list per the example below. The adjacency matrix should be neat with columns 
# neatly aligned. NOTE: You can expect the user to ask for 10 or less vertices for the sake of matrix formatting. 
# For 10 or less vertices, all columns are one character wide which can be formatted
# without any fancy formatting tools.
# • The program should consist of five functions:
# 3
# – GenerateAdjMatrix: GenerateAdjMatrix creates and returns the adjacency matrix. The function takes two 
# parameters: the two inputs provided by the user.
# – CreateAdjList: CreateAdjList creates and returns the adjacency list. The function takes the adjacency 
# matrix as a parameter.
# – PrintAdjMatrix: This function prints the adjacency matrix in the format specified in the example below.
# – PrintAdjList: This function prints the adjacency list in the format specified in the example below.
# – main: All code not in one of the other four functions should be in main (e.g., user input) except for import 
# statements and constants
# Collaboration:

import random

def GenerateAdjMatrix(numVertices, probOfEdge): 
    adjMatrix = []
    for i in range(numVertices):
      row = []
      for j in range(numVertices):
          if i != j and random.uniform(0,1) < probOfEdge:
              row.append(1)
          else:
              row.append(0)
      adjMatrix.append(row)
    return adjMatrix

def CreateAdjList(adjMatrix):
    adjList = []
    for i in range(len(adjMatrix)):
        edgeVertices = []
        for j in range(len(adjMatrix[i])):
            if adjMatrix[i][j] == 1:
                edgeVertices.append([i,j])
        adjList.append(edgeVertices)
    return adjList

def PrintAdjMatrix(adjMatrix):
    print("ADJACENCY MATRIX:")
    print(end="\t")
    for i in range(len(adjMatrix)):
        print(i,end="\t")
    print("\n")
    for i in range(len(adjMatrix)):
        print(i,end="\t")
        for j in range(len(adjMatrix[i])):
            print(adjMatrix[i][j], end="\t")
        print("\n")

def PrintAdjList(adjList):
    print("ADJACENCY LIST")
    for i in range(len(adjList)):
        print(f"{i}: ", end="") 
        for j in range(len(adjList[i])):
            print(adjList[i][j][1],end=" ")
        print("\n")

def main():
    x = int(input("NUMBER OF VERTICES:"))
    y = float(input("PROBABILITY OF AN EDGE BETWEEN VERTICES:"))
    z = GenerateAdjMatrix(x,y)
    w = CreateAdjList(z)
    PrintAdjMatrix(z)
    PrintAdjList(w)

main()



                



