document.getElementById('pay-button').addEventListener('click', function() {
    // Lấy giá trị từ input họ tên, địa chỉ và phương thức thanh toán
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var paymentMethod = document.querySelector('input[name="payment-method"]:checked');

    // Kiểm tra nếu người dùng đã nhập đầy đủ thông tin
    if (name !== "" && address !== "" && paymentMethod !== null) {
        // Ẩn form thanh toán và hiện thông báo cảm ơn
        document.querySelector('.checkout-form').style.display = 'none';
        document.getElementById('thankyou-message').classList.remove('hidden');
    } else {
        alert("Vui lòng nhập đầy đủ thông tin và chọn phương thức thanh toán.");
    }
});