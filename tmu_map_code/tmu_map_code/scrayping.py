from tabula import read_pdf

dfs = read_pdf("./2022年度授業時間割(2018年度以降入学生用).pdf", lattice=True, pages = '8')
for df in dfs:
  print(df) 

df.to_csv("PDFの表.csv", index=None, encoding="utf-8")
