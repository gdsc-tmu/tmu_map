from django.db import models

class ClassroomAllocation(models.Model):
    lecture_id = models.CharField(max_length=5, primary_key=True)
    building = models.CharField(max_length=20)
    room_id = models.CharField(max_length=20)
   

    def __str__(self):
        return f"{self.lecture_id} {self.building} {self.room_id}"
    
    class Meta:
        managed = False
        db_table = 'classroom_allocation'

class SyllabusBaseInfo(models.Model):
    lecture_id = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=100)
    season = models.CharField(max_length=8)
    day = models.CharField(max_length=30)
    period = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.lecture_id} {self.name} {self.season} {self.day} {self.period}"
    
    class Meta:
        managed = False
        db_table = 'syllabus_base_info'


class Coordination(models.Model):
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    building = models.CharField(max_length=20)
    id = models.CharField(max_length=5, primary_key=True)
    
    class Meta:
        managed = False
        db_table = 'classroom_coordination'