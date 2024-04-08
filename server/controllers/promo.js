import { db } from "../connect.js";

export const heis = (req, res) => {
  const heisQuery = "SELECT * FROM hei";
  db.query(heisQuery, (err, data) => {
    if (err) return res.status(500).json(err);

    res.status(200).json(data);
  });
};

export const academicyears = (req, res) => {
  const academicyearsQuery = "SELECT * FROM academicyear";
  db.query(academicyearsQuery, (err, data) => {
    if (err) return res.status(500).json(err);

    res.status(200).json(data);
  });
};

export const semester = (req, res) => {
  const semesterQuery = "SELECT * FROM semester WHERE ACAD_ID = ?";
  db.query(semesterQuery, [req.body.id], (err, data) => {
    if (err) return res.status(500).json(err);

    res.status(200).json(data);
  });
};

export const promo = (req, res) => {
  const promoQuery =
    "SELECT student.Student_No, student.Last_Name, student.First_Name, student.Middle_Name, student.Ext_Name, student.Sex, yearlevel.Year_Level, program.Program_name, program.Program_Major, course.Course_ID, course.Grades, course.Remarks, course.Course_Description, course.Num_units FROM promo LEFT JOIN student ON student.Student_No = promo.Student_No LEFT JOIN program ON program.Program_ID = student.Program_ID   LEFT JOIN course ON promo.Course_ID = course.Course_ID LEFT JOIN semester ON semester.SEM_ID = course.SEM_ID LEFT JOIN academicyear ON academicyear.ACAD_ID = semester.ACAD_ID LEFT JOIN yearlevel ON yearlevel.Student_No = student.Student_No WHERE HEI_ID = ? AND academicyear.ACAD_ID LIKE ? GROUP BY student.Last_Name ASC";
  const { heiid, academicyear } = req.body;

  db.query(
    promoQuery,
    [heiid, `%${academicyear.split(",")[0]}%`],
    (err, data) => {
      if (err) return res.status(500).json(err);

      res.status(200).json(data);
    }
  );
};

export const transcripts = (req, res) => {
  const { id, acadYr } = req.body;
  const transcriptsCourseQuery =
    "SELECT semester.Semester, academicyear.Year,  course.Course_Code, course.Course_Description, course.Grades, course.Num_units, course.Remarks FROM course LEFT JOIN student ON student.Student_No = course.Student_No LEFT JOIN semester ON course.SEM_ID = semester.SEM_ID LEFT JOIN academicyear ON semester.ACAD_ID = academicyear.ACAD_ID  WHERE course.Student_No = ? AND academicyear.Year LIKE ?";
  db.query(transcriptsCourseQuery, [id, `%${acadYr}%`], (err, courseData) => {
    if (err) return res.status(500).json(err);

    res.status(200).json({ TranscriptCourse: courseData });
  });
};

export const aysem = (req, res) => {
  const aysemQuery =
    "SELECT academicyear.Year, semester.Semester FROM details LEFT JOIN hei ON hei.HEI_ID = details.HEI_ID LEFT JOIN program ON program.Program_ID = details.Program_ID LEFT JOIN student ON student.Student_No = details.Student_No LEFT JOIN course ON course.Course_ID = details.Course_ID LEFT JOIN semester ON semester.SEM_ID = course.SEM_ID LEFT JOIN academicyear ON academicyear.ACAD_ID = semester.ACAD_ID WHERE student.Student_No = ? GROUP BY academicyear.Year";
  const { id } = req.body;
  db.query(aysemQuery, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
  });
};
