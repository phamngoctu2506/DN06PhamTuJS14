//! bài 1
/**
 * b1: tạo hàm
 * b2: lấy giá trị từ value
 * b3: tạo hàm if else
 * b4: phân loại điều kiện và trả kết quả
 * 
 * 
 * b5: hiển thị kết quả
 */

function sapXep() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);

    if (num1 >= num2 && num2 >= num3) {
        ketQuaTraVe = num3 + ', ' + num2 + ', ' + num1;
    } else if (num1 >= num2 && num2 <= num3 && num1 >= num3) {
        ketQuaTraVe = num2 + ', ' + num3 + ', ' + num1;
    } else if (num1 <= num2 && num2 >= num3 && num1 >= num3) {
        ketQuaTraVe = num3 + ', ' + num1 + ', ' + num2;
    } else if (num1 >= num2 && num2 <= num3 && num1 <= num3) {
        ketQuaTraVe = num2 + ', ' + num1 + ', ' + num3;
    } else if (num1 <= num2 && num2 >= num3 && num1 <= num3) {
        ketQuaTraVe = num1 + ', ' + num3 + ', ' + num2;
    } else if (num1 <= num2 && num2 <= num3) {
        ketQuaTraVe = num1 + ', ' + num2 + ', ' + num3;
    } else {
        alert('dữ liệu không hợp lệ')
    }
    document.getElementById('ketQuaTraVe0').innerHTML = ketQuaTraVe;
}

//! bài 2
/**
 * b1: tạo hàm
 * b2: đặt giá trị value cho từng option
 * b3: lấy giá trị value
 * b4: tạo hàm if else
 * b5: phân loại và trả kết quả
 * b6: trả kểt quả và hiển thị lên UI
 */

function loiChao() {
    var chonNguoi = document.getElementById('exampleFormControlSelect1').value;

    if (chonNguoi == 2) {
        guiLoiChao = "Bố";
    } else if (chonNguoi == 3) {
        guiLoiChao = "Mẹ";
    } else if (chonNguoi == 4) {
        guiLoiChao = "Anh Trai";
    } else if (chonNguoi == 5) {
        guiLoiChao = "Em Gái";
    } else {
        guiLoiChao = "Bạn, Bạn Chưa Chọn Người Nhé !";
    }
    document.getElementById('ketQuaLoiChao').innerHTML = guiLoiChao;
}

//! bài 3
/**
 * ? input
 * số thứ 1, số thứ 2, số thứ 3
 * 
 * ? các bước xử lý
 *  tạo hàm onclick cho btn
 *  lấy giá trị từ value chia cho 2 lấy được số dư ==> so dư = 0 => số chẳn và ngược lại
 *  tạo hàm điều kiện
 *  phân loại điều kiện 
 * 
 * ? output 
 *  b3: hiển thị kết quả lên UI
 * 
 */

function demSo() {
    var num_1 = Number(document.getElementById('number4').value) % 2;
    var num_2 = Number(document.getElementById('number5').value) % 2;
    var num_3 = Number(document.getElementById('number6').value) % 2;
    demSoThuTu = num_1 + num_2 + num_3;

    if (demSoThuTu == 0) {
        ketQuaDemSo = '3 số chẳn';
    } else if (demSoThuTu == 1) {
        ketQuaDemSo = '1 số lẻ ,2 số chẳn';
    } else if (demSoThuTu == 2) {
        ketQuaDemSo = '2 số lẻ, 1 số chẳn';
    } else if (demSoThuTu == 3) {
        ketQuaDemSo = '3 số lẻ';
    } else {
        alert('dữ liệu không hợp lệ');
    }
    document.getElementById('ketQuaDemSo').innerHTML = ketQuaDemSo;

}

//! bài 4
/**
 *?  input :
 *  canh1, canh2, canh3
 *
 *? các bước xử lý
 *  tạo hàm onclick từ btn
 *  lấy giá trị từ value
 *  tạo hàm if else
 *  phân loại điều kiện tam giác
 *
 *?  output
 *  b3:hiển thị kết quả lên UI
 */

function duDoan() {
    var canh1 = Number(document.getElementById("number7").value);
    var canh2 = Number(document.getElementById("number8").value);
    var canh3 = Number(document.getElementById("number9").value);

    if (canh1 == canh2 && canh2 == canh3 && canh1 > 0 && canh2 > 0 && canh3 > 0) {
        ketQuaDuDoan1 = "tam giác đều";
    } else if (Math.pow(canh1, 2) + Math.pow(canh2, 2) == Math.pow(canh3, 2) && canh1 > 0 && canh2 > 0 && canh3 > 0) {
        ketQuaDuDoan1 = "tam giác vuông";
    } else if (Math.pow(canh1, 2) + Math.pow(canh3, 2) == Math.pow(canh2, 2) && canh1 > 0 && canh2 > 0 && canh3 > 0) {
        ketQuaDuDoan1 = "tam giác vuông";
    } else if (Math.pow(canh3, 2) + Math.pow(canh2, 2) == Math.pow(canh1, 2) && canh1 > 0 && canh2 > 0 && canh3 > 0) {
        ketQuaDuDoan1 = "tam giác vuông";
    } else if (canh1 == canh2 && canh2 != canh3 && canh1 > 0 && canh2 > 0 && canh3 > 0) {
        ketQuaDuDoan1 = "tam giác cân";
    } else if (canh1 == canh3 && canh3 != canh2 && canh1 > 0 && canh2 > 0 && canh3 > 0) {
        ketQuaDuDoan1 = "tam giác cân";
    } else if (canh3 == canh2 && canh2 != canh1 && canh1 > 0 && canh2 > 0 && canh3 > 0) {
        ketQuaDuDoan1 = "tam giác cân";
    } else if (canh1 != 0 && canh2 != 0 && canh3 != 0) {
        ketQuaDuDoan1 = "một loại tam giác khác";
    } else if (canh1 == 0 || canh2 == 0 || canh3 == 0) {
        ketQuaDuDoan1 = "kích thước không hợp lệ";
    } else {
        console.log('một loại tam giác khác');
    }
    document.getElementById('ketQuaDuDoan').innerHTML = ketQuaDuDoan1;
}
