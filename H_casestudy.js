class NghiPhep {
  constructor(ten, ma, namsinh, namLV, gioitinh, ngayNP) {
    this.ten = ten;
    this.ma = ma;
    this.namsinh = namsinh;
    this.namLV = namLV;
    this.gioitinh = gioitinh;
    this.ngayNP = ngayNP;
  }
}

let dsNghiPhep = [];
var globalArr = 0;

let btnAdd = document.getElementById("btn-addNV");
btnAdd.addEventListener("click", () => {
  let nameNV = document.getElementById("name-nv").value;
  let gioitinhNV = document.getElementById("GioitinhNV").value;
  let maNV = parseInt(document.getElementById("ma-nv").value);
  let namsinhNV = parseInt(document.getElementById("namsinh-nv").value);
  let namLVNV = parseInt(document.getElementById("nam-lv").value);
  var yNow = new Date();
  var phepBonus = Math.floor((parseInt(yNow.getFullYear()) - namLVNV) / 5);
  var phepFinal = phepBonus + 12;
  // console.log(yNow.getFullYear());
  // console.log (phepBonus);
  let newNV = new NghiPhep(
    nameNV,
    maNV,
    namsinhNV,
    namLVNV,
    gioitinhNV,
    phepFinal
  );

  dsNghiPhep.push(newNV);
  alert("Đã thêm thành công nhân viên " + nameNV + " vào công ty");
  // console.log(dsNghiPhep);
  // console.log(newNV);
});

function showDS() {
  var bangNV = document.getElementById("bangdsNV");
  // console.log(globalArr);
  // console.log(dsNghiPhep)
  for (i = 1; i <= globalArr; i++) {
    var deleteRow = bangNV.deleteRow(1);
  }
  // console.log(bangNV.length);
  for (i = 1; i <= dsNghiPhep.length; i++) {
    var updateRow = bangNV.insertRow(i);
    // for(let j in dsNghiPhep){
    var CellTen = updateRow.insertCell(0);
    CellTen.innerHTML = dsNghiPhep[i - 1].ten;
    var CellMa = updateRow.insertCell(1);
    CellMa.innerHTML = dsNghiPhep[i - 1].ma;
    var CellNamSinh = updateRow.insertCell(2);
    CellNamSinh.innerHTML = dsNghiPhep[i - 1].namsinh;
    var CellNamLV = updateRow.insertCell(3);
    CellNamLV.innerHTML = dsNghiPhep[i - 1].namLV;
    var CellGioiTinh = updateRow.insertCell(4);
    CellGioiTinh.innerHTML = dsNghiPhep[i - 1].gioitinh;
    var CellNgayNP = updateRow.insertCell(5);
    CellNgayNP.innerHTML = dsNghiPhep[i - 1].ngayNP;
    globalArr = parseInt(dsNghiPhep.length);
    // console.log(globalArr);
    // console.log(dsNghiPhep)
    // bangNV.rows[i].cells[1].innerHTML = "Hlo";
    // bangNV.rows[i].cells[0].innerHTML = dsNghiPhep[i-1].ten;
    // bangNV.rows[i].cells[1].innerHTML = dsNghiPhep[i-1].ma;
    // bangNV.rows[i].cells[2].innerHTML = dsNghiPhep[i-1].namsinh;
    // bangNV.rows[i].cells[3].innerHTML = dsNghiPhep[i-1].namLV;
    // bangNV.rows[i].cells[4].innerHTML = dsNghiPhep[i-1].gioitinh;
    // bangNV.rows[i].cells[5].innerHTML = dsNghiPhep[i-1].ngayNP;
    // }//
  }
  // bangNV.rows[1].cells[1].innerHTML = "Heloo";
  // var updateRow = bangNV.insertRow(2);
  // var cell1 =updateRow.insertCell(0);
  // var cell2 =updateRow.insertCell(1);
  // bangNV.rows[2].cells[1].innerHTML = "Helo";
  // for (let i in dsNghiPhep){
  //     bangNV = bangNV + "<tr>";
  //     bangNV = bangNV + "<td>" + dsNghiPhep[i].ten + "</td>";
  //     console.log(dsNghiPhep[i].ten);
  //     console.log(bangNV);
  // }
  // bangNV = bangNV + "</tr>";
}
function xoaNV() {
  let xoaMaNV = document.getElementById("maNV-xoa").value;
  let tenNVxoa;
  let check = false;
  // var bangNV = document.getElementById("bangdsNV");
  // // console.log(bangNV.length);
  // for (i=1;i<=dsNghiPhep.length;i++){
  //     var deleteRow = bangNV.deleteRow(i);
  // }
  for (let i in dsNghiPhep) {
    if (dsNghiPhep[i].ma == xoaMaNV) {
      check = true;
      tenNVxoa = dsNghiPhep[i].ten;
      dsNghiPhep.splice(i, 1);
      globalArr = parseInt(dsNghiPhep.length);
      alert("Đã xóa nhân viên " + tenNVxoa + " khỏi danh sách công ty");
      var bangNV = document.getElementById("bangdsNV");
      for (i = 1; i <= globalArr; i++) {
        var deleteRow = bangNV.deleteRow(1);
      }
    }
  }
  if (check == false) {
    alert("Không có nhân viên trùng với mã cán bộ này");
  }

  alert('Vui lòng click "Hiển thị danh sách" để refresh danh sách nhân viên');
}

function xinNP() {
  let maXinNP = document.getElementById("maNV-np").value;
  let batdauNPStr = document.getElementById("begin-day").value;
  let ketthucNPStr = document.getElementById("end-day").value;
  var testBeginday = new Date(batdauNPStr);
  console.log(testBeginday.getDay());
  var batdauNP = parseInt(batdauNPStr.slice(8, 10));
  var ketthucNP = parseInt(ketthucNPStr.slice(8, 10));
  var kyphep = ketthucNP - batdauNP;
  let tenNVNP;
  if (kyphep < 0) {
    alert("Vui lòng xin nghỉ phép trong phạm vi một tháng!");
  } else {
    let check = false;
    for (let i in dsNghiPhep) {
      if (dsNghiPhep[i].ma == maXinNP) {
        check = true;
        dsNghiPhep[i].ngayNP = parseInt(dsNghiPhep[i].ngayNP - kyphep);
        tenNVNP = dsNghiPhep[i].ten;
        globalArr = parseInt(dsNghiPhep.length);
        alert("Đã xin nghỉ phép cho nhân viên " + tenNVNP + " thành công");
        // var bangNV = document.getElementById("bangdsNV");
        // for (i = 1; i <= globalArr; i++) {
        //   var deleteRow = bangNV.deleteRow(1);
        // }
      }
    }
    if (check == false) {
      alert("Không có nhân viên trùng với mã cán bộ này");
    }
  }
  alert('Vui lòng click "Hiển thị danh sách" để refresh danh sách nhân viên');
}
