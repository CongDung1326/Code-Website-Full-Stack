"use strict";

require("core-js/modules/es.promise.js");
let patientAPIsService = require('../services/patientAPIsService.js');
let handlePostBookAppointment = async (req, res) => {
  try {
    let data = req.body;
    let infor = await patientAPIsService.postBookAppointment(data);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server!'
    });
  }
};
let handlePostVerifyBookAppointment = async (req, res) => {
  try {
    let data = req.body;
    let infor = await patientAPIsService.postVerifyBookAppointment(data);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server!'
    });
  }
};
let handleGetListPatientForDoctor = async (req, res) => {
  try {
    let data = req.query;
    let infor = await patientAPIsService.getListPatientForDoctor(data);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server!'
    });
  }
};
module.exports = {
  handlePostBookAppointment: handlePostBookAppointment,
  handlePostVerifyBookAppointment: handlePostVerifyBookAppointment,
  handleGetListPatientForDoctor: handleGetListPatientForDoctor
};