import type { HeadsetProps } from '../type'

export const MOCK_DATA_HEADSET: HeadsetProps[] = [
    {
        id: 1,
        name: "Samsung Galaxy Buds",
        slug: "samsung-buds",
        information: {
            battery: "Dùng Khoảng 8.5 giờ (khi tắt ANC) - Sạc Khoảng 1.7 giờ",
            caseBattery: "Dùng 30 giờ - Sạc Khoảng 2 giờ",
            chargingPort: "Type-C",
            technologies: [
                "Active Noise Cancelling",
                "Adaptive EQ",
                "Ambient Sound",
                "360 Reality Audio"
            ],
            utility: [
                "Auto Switch",
                "6 Micro chống ồn",
                "Trợ lý ảo Bixby",
                "Chế độ thất lạc (Lost Mode)",
                "Chống nước & bụi IP54"
            ],
        },
        price: 2990000,
        imageUrl: [
            "https://dummyimage.com/600x400/b6ceb4/ffc19b&text=Samsung+Galaxy+Buds[1]",
            "https://dummyimage.com/600x400/96a78d/ffc19b&text=Samsung+Galaxy+Buds[2]",
            "https://dummyimage.com/600x400/59ac77/ffc19b&text=Samsung+Galaxy+Buds[3]"
        ],
        description: "Hộp sạc được làm nhỏ nhắn, dạng vuông bo góc mềm mại, tích hợp đèn báo LED trực quan để người dùng dễ dàng theo dõi dung lượng pin. Hai phiên bản màu sắc cơ bản – đen và Xám cho phép bạn lựa chọn tùy theo cá tính và gu thẩm mỹ riêng. Mỗi chi tiết đều được chăm chút kỹ lưỡng, từ bề mặt mịn màng cho đến đường viền tinh tế, tạo nên tổng thể hài hòa.",
        promotions: [
            "Trả chậm 0% lãi suất. Đặc biệt giảm đến 10% tối đa 5 triệu khi thanh toán qua Kredivo",
            "Trả chậm 0 Đồng - 0% Lãi suất kỳ hạn 1- 4 tháng. Giảm 5% tối đa 50,000đ áp dụng đơn hàng tối thiểu 250,000đ khi thanh toán lần đầu qua HOME PayLater",
            "0% Lãi suất, 0Đ Trả trước, Trả chậm đến 3 tháng qua PAYLATER",
            "Nhập mã VNPAY4 giảm tối đa 100,000đ (áp dụng tùy giá trị đơn hàng) khi thanh toán qua VNPAY-QR",
            "Nhận ngay 200.000đ hoàn tiền khi mở thẻ tín dụng TPBank EVO và chi tiêu từ 1 triệu đồng"
        ]
    },
    {
        id: 2,
        name: "Sony WH-CH520",
        slug: "sony-wh-ch520",
        information: {
            battery: "Dùng 50 giờ - Sạc 3 giờ",
            chargingPort: "Type-C",
            technologies: [
                "codec SBC",
                "Công nghệ ENC",
                "codec AAC",
                "360 Reality Audio",
                "DSEE",
                "Equalizer"
            ],
            utility: [
                "Sạc nhanh",
                "Tương thích trợ lý ảo",
                "Micro chống ồn, lọc gió",
                "Hỗ trợ Google Fast Pair và Microsoft Swift Pair"
            ],
        },
        price: 1065000,
        imageUrl: [
            "https://dummyimage.com/600x400/bde3c2/ffc19b&text=Sony+WH-CH520[1]",
            "https://dummyimage.com/600x400/a3ccda/ffc19b&text=Sony+WH-CH520[2]",
            "https://dummyimage.com/600x400/f5d2d2/ffc19b&text=Sony+WH-CH520[3]"
        ],
        description: "Đặc biệt, với sự hỗ trợ từ công nghệ 360 Reality Audio, trải nghiệm âm thanh trở nên bao trùm và sống động hơn bao giờ hết. Âm nhạc khi truyền qua tai nghe có sự kết hợp hoàn hảo giữa âm bass mạnh mẽ, trầm ấm nhưng không lấn át, cùng dải âm trung mềm mại và dải treble trong trẻo tạo nên một không gian âm thanh hài hòa.",
        promotions: [
            "Trả chậm 0% lãi suất. Đặc biệt giảm đến 10% tối đa 5 triệu khi thanh toán qua Kredivo",
            "Trả chậm 0 Đồng - 0% Lãi suất kỳ hạn 1- 4 tháng. Giảm 5% tối đa 50,000đ áp dụng đơn hàng tối thiểu 250,000đ khi thanh toán lần đầu qua HOME PayLater",
            "0% Lãi suất, 0Đ Trả trước, Trả chậm đến 3 tháng qua PAYLATER",
            "Nhập mã VNPAY4 giảm tối đa 100,000đ (áp dụng tùy giá trị đơn hàng) khi thanh toán qua VNPAY-QR",
            "Nhận ngay 200.000đ hoàn tiền khi mở thẻ tín dụng TPBank EVO và chi tiêu từ 1 triệu đồng"
        ]
    },
    {
        id: 3,
        name: "AirPods Pro 3",
        slug: "airpod-pro3",
        information: {
            battery: "Dùng Khoảng 8 giờ (khi bật ANC) - Sạc Hãng không công bố",
            caseBattery: "Dùng 32 giờ - Sạc Hãng không công bố",
            chargingPort: "Sạc MagSafe, Type-C",
            technologies: [
                "Studio-quality audio recording",
                "Personalized Spatial Audio",
                "Adaptive Audio",
                "Active Noise Cancellation",
                "Chip Apple H2",
                "Adaptive EQ",
                "Transparency Mode"
            ],
            utility: [
                "Voice Isolation",
                "Tìm tai nghe",
                "Heart Rate Sensing",
                "Hearing Health",
                "Dynamic head tracking",
                "Conversation Awareness",
                "Chống nước & bụi IP57",
                "Trợ lý ảo Siri",
                "Hỗ trợ chụp ảnh",
                "Hỗ trợ sạc không dây Qi",
                "Có mic thoại",
                "Sạc nhanh"
            ],
        },
        price: 6790000,
        imageUrl: [
            "https://dummyimage.com/600x400/476eae/ffc19b&text=AirPods+Pro+3[1]",
            "https://dummyimage.com/600x400/f7ff99/ffc19b&text=AirPods+Pro+3[2]",
            "https://dummyimage.com/600x400/67c091/ffc19b&text=AirPods+Pro+3[3]"
        ],
        description: "AirPods Pro 3 mang đến một bước tiến mới trong thiết kế, tập trung vào sự vừa vặn và thoải mái để bạn có thể trải nghiệm trọn vẹn âm thanh mọi lúc. So với AirPods Pro 2, thế hệ mới được Apple cải tiến với phần khuyên tai xoay vào trong, giúp ôm khít cấu trúc tai hơn, tạo cảm giác chắc chắn ngay cả khi vận động mạnh. Thiết kế này không chỉ mang lại sự ổn định mà còn hạn chế tối đa tình trạng cấn hoặc khó chịu thường gặp ở tai nghe in-ear.",
        promotions: [
            "Trả chậm 0% lãi suất. Đặc biệt giảm đến 10% tối đa 5 triệu khi thanh toán qua Kredivo",
            "Trả chậm 0 Đồng - 0% Lãi suất kỳ hạn 1- 4 tháng. Giảm 5% tối đa 50,000đ áp dụng đơn hàng tối thiểu 250,000đ khi thanh toán lần đầu qua HOME PayLater",
            "0% Lãi suất, 0Đ Trả trước, Trả chậm đến 3 tháng qua PAYLATER",
            "Nhập mã VNPAY4 giảm tối đa 100,000đ (áp dụng tùy giá trị đơn hàng) khi thanh toán qua VNPAY-QR",
            "Nhận ngay 200.000đ hoàn tiền khi mở thẻ tín dụng TPBank EVO và chi tiêu từ 1 triệu đồng"
        ]
    }
]