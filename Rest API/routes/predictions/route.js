const express = require('express');
const router = express.Router();
const uploadController = require('./controller');

// Konfigurasi multer untuk mengelola file yang diunggah
const multer = require('multer');

// Konfigurasi penyimpanan dan penamaan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Tentukan folder penyimpanan file
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage: storage });

router.post('/karbo', upload.single('file'), uploadController.predKarbo);
router.post('/sayur', upload.single('file'), uploadController.predSayur);
router.post('/kacang', upload.single('file'), uploadController.predKacang);
router.post('/daily', upload.single('file'), uploadController.predDaily);
router.post('/daging', upload.single('file'), uploadController.predDaging);
router.post('/rempah', upload.single('file'), uploadController.predRempah);
router.post('/buah', upload.single('file'), uploadController.predBuah);

module.exports = router;
