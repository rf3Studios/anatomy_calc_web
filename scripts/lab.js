/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2013 rf3Studios.com <Rich Friedel>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Lab Class
 *
 * Attendance -
 * Missed lab results in a 2% reduction of the final grade
 *
 * Grading -
 *    Final grade determined as follows:
 *        3 Tests =       20% each
 *        Final exam =    30%
 *        Participation = 10%
 *
 * (((Practical1 + Practical2 + Practical3) / 3) * 0.6) + (Final Practical% * 0.3) + ((Participation) * 0.1)) * 0.25
 */
function Lab() {
}

/**
 * Calculates the average of all the lab exams and returns the value
 *
 * @param labExams
 * @returns {number}
 */
Lab.prototype.calculateExamAverage = function (labExams) {
    var _sumOfExams = 0;

    for (var i = 0; i < labExams.length; i++) {
        _sumOfExams += labExams[i];
    }

    return _sumOfExams / labExams.length;
};

/**
 * Returns the weighted value of all the lab exam (practicals) grades
 *
 * @param labExams
 * @returns {number}
 */
Lab.prototype.calculateWeightedExamGrade = function (labExams) {
    return this.calculateExamAverage(labExams) * 0.6;
};

/**
 * Returns the weighted value of the lab final exam grade
 *
 * @param finalExam
 * @returns {number}
 */
Lab.prototype.calculateWeightedFinalExamGrade = function (finalExam) {
    return finalExam * 0.3;
};

/**
 * Returns the weighted value of the lab participation grade
 *
 * @param participation
 * @returns {number}
 */
Lab.prototype.calculateWeightedParticipation = function (participation) {
    return participation * 0.1;
};

/**
 * Returns the weighted value of the final total grade in lab
 *
 * @param examList
 * @param finalExam
 * @param participation
 * @param daysMissed
 * @returns {number}
 */
Lab.prototype.calculateWeightedTotal = function (examList, finalExam, participation, daysMissed) {
    var _grade = this.calculateWeightedExamGrade(examList) + this.calculateWeightedFinalExamGrade(finalExam) + this.calculateWeightedParticipation(participation);

    if (daysMissed > 0) {
        return (_grade - (_grade * (daysMissed * 0.02))) * 0.25;
    } else {
        return _grade * 0.25;
    }
};