const express = require("express");
const userAPIsControllers = require('../controllers/userAPIsControllers.js');
const doctorAPIsControllers = require('../controllers/doctorAPIsControllers.js');
const patientAPIsControllers = require('../controllers/patientAPIsControllers.js');

let router = express.Router();

let initAPIRoutes = (app) => {
    router.post('/login', userAPIsControllers.handleLogin);
    // Lấy all thông tin user
    router.get('/get-all-users', userAPIsControllers.handleGetAllUsers);

    // Create user
    router.post('/create-new-user', userAPIsControllers.handleCreateUser);
    // Delete user
    router.delete('/delete-user', userAPIsControllers.handleDeleteUser);
    // Edit user
    router.put('/edit-user', userAPIsControllers.handleEditUser);

    router.get('/all-codes', userAPIsControllers.getAllCodes);

    // Doctor
    router.get('/get-doctor-home', doctorAPIsControllers.handleGetDoctorHome);
    router.get('/get-all-doctor', doctorAPIsControllers.handleGetAllDoctor)
    router.post('/save-info-doctor', doctorAPIsControllers.handleCreateInfoDoctor)
    router.get('/get-detail-doctor-by-id', doctorAPIsControllers.handleGetDetailDoctor)
    router.put('/save-detail-doctor', doctorAPIsControllers.handleSaveDetailDoctor);
    router.post('/bulk-create-schedule', doctorAPIsControllers.handleBulkCreateSchedule);
    router.get('/get-schedule-doctor-by-date', doctorAPIsControllers.handleGetScheduleByDate);
    router.post('/create-more-info-doctor', doctorAPIsControllers.handleCreateMoreInfoDoctor);
    router.put('/edit-more-info-doctor', doctorAPIsControllers.handleEditMoreInfoDoctor)
    router.get('/get-more-info-doctor', doctorAPIsControllers.handleGetMoreInfoDoctor);
    router.get('/get-profile-doctor-by-id', doctorAPIsControllers.handleGetProfileDoctorById);

    router.post('/patient-book-appointment', patientAPIsControllers.handlePostBookAppointment);
    router.post('/verify-booking', patientAPIsControllers.handlePostVerifyBookAppointment);

    router.get('/test', userAPIsControllers.test);

    return app.use('/api', router);
}

module.exports = initAPIRoutes;