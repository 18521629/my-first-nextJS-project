import type {DeviceProps} from '../type'

export const MOCK_DATA_LAPTOP: DeviceProps[] = [
    {
        id: 1, 
        deviceName: "Macbook Air M3", 
        slug: "macbook-air-m3", 
        system: {
            core: 10,
            threads: "Unknown",
            cpu: "120 GB/s memory bandwidth", 
            ram: "16 GB", 
            memory: "256 GB SSD",
        },
        price: 30390000,
        imageUrl: [
            "https://dummyimage.com/600x400/b8c4a9/6fa4af&text=Macbook+Air+M3[1]",
            "https://dummyimage.com/600x400/a7aae1/6fa4af&text=Macbook+Air+M3[2]",
            "https://dummyimage.com/600x400/c2a68c/6fa4af&text=Macbook+Air+M3[3]"
        ],
        description: "MacBook Air 15 inch được xây dựng trên tiến trình 3 nm thế hệ thứ hai hiện đại, giúp tối ưu hóa hiệu suất và tiết kiệm năng lượng đáng kể. Với 10 nhân CPU và băng thông bộ nhớ lên đến 120 GB/s, chiếc MacBook Air này có thể xử lý mượt mà từ các tác vụ văn phòng đến thiết kế đồ họa và lập trình phức tạp.",
        promotions: [
            "Phiếu mua hàng AirPods, Apple Watch, Macbook trị giá 500,000đ",
            "Tặng Phiếu mua hàng mua sạc dự phòng (trừ AVA+, Hydrus); đồng hồ thông minh (trừ Apple); Tai nghe bluetooth và Loa bluetooth các hãng JBL, Marshall,Harman Kardon; Ốp lưng (trừ Apple) trị giá 100.000đ",
            "Phiếu mua hàng máy lọc nước trị giá 300.000đ",
            "Phiếu mua hàng áp dụng mua tất cả sim có gói Mobi, Itel, Local, Vina ,VNMB và 2 gói cước (Siêu việt, 5G180) của Viettel trị giá 50,000đ.",
            "Thu cũ đổi mới: Giảm đến 2,000,000đ (Không kèm ưu đãi thanh toán qua cổng, mua kèm)",
            "Trả chậm 0% lãi suất. Đặc biệt giảm đến 10% tối đa 5 triệu khi thanh toán qua Kredivo"
        ]
    },
    {
        id: 2, 
        deviceName: "Laptop Asus Zenbook 14", 
        slug: "asus-zenbook-14", 
        system: {
            core: 4,
            threads: 8,
            cpu: "2.80 GHz (Lên đến 4.30 GHz khi tải nặng)", 
            ram: "16 GB", 
            memory: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1 TB)", 
        },
        price: 12690000,
        imageUrl: [
            "https://dummyimage.com/600x400/faeab1/34656d&text=Laptop+Asus+Zenbook+14[1]",
            "https://dummyimage.com/600x400/a7aae1/f2aeba&text=Laptop+Asus+Zenbook+14[2]",
            "https://dummyimage.com/600x400/5d866c/e6d8c3&text=Laptop+Asus+Zenbook+14[3]"
        ],
        description: "Kiểu dáng đã quá quen thuộc đến từ các dòng Vivobook nhà Asus, tuy vậy nhưng với thiết kế ngoại hình tối giản hiện đại như vậy, cá nhân mình lại nhận thấy cực kì phù hợp với xu hướng thời trang hiện nay. Laptop Asus vẫn giữ được nét thuần tuý với gam màu bạc sáng khá thu hút, vỏ được chế tác bằng nhựa nhưng lại rất cứng cáp, độ bền lại còn được đảm bảo chuẩn quân đội MIL STD 810H và các bề mặt được gia công ghép nối rất kĩ, nên mình chỉ việc trang bị thêm một chiếc túi chống sốc là có thể an tâm mang theo mọi nơi rồi.",
        promotions: [
            "Phiếu mua hàng AirPods, Apple Watch, Macbook trị giá 500,000đ",
            "Tặng Phiếu mua hàng mua sạc dự phòng (trừ AVA+, Hydrus); đồng hồ thông minh (trừ Apple); Tai nghe bluetooth và Loa bluetooth các hãng JBL, Marshall,Harman Kardon; Ốp lưng (trừ Apple) trị giá 100.000đ",
            "Phiếu mua hàng máy lọc nước trị giá 300.000đ",
            "Phiếu mua hàng áp dụng mua tất cả sim có gói Mobi, Itel, Local, Vina ,VNMB và 2 gói cước (Siêu việt, 5G180) của Viettel trị giá 50,000đ.",
            "Thu cũ đổi mới: Giảm đến 2,000,000đ (Không kèm ưu đãi thanh toán qua cổng, mua kèm)",
            "Trả chậm 0% lãi suất. Đặc biệt giảm đến 10% tối đa 5 triệu khi thanh toán qua Kredivo",
            "Nhập mã VNPAYTGDD4 giảm tối đa 100,000đ (áp dụng tùy giá trị đơn hàng) khi thanh toán qua VNPAY-QR"
        ]
    },
    {
        id: 3, 
        deviceName: "Laptop MSI Gaming Thin", 
        slug: "msi-gaming-thin", 
        system: {
            core: 8,
            threads: 12,
            cpu: "2.10 GHz (Lên đến 4.60 GHz khi tải nặng)", 
            ram: "16 GB", 
            memory: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 4 TB)", 
        },
        price: 16690000,
        imageUrl: [
            "https://dummyimage.com/600x400/6e8dfb/e2a16f&text=Laptop+MSI+Gaming+Thin[1]",
            "https://dummyimage.com/600x400/d1d3d4/e2a16f&text=Laptop+MSI+Gaming+Thin[2]",
            "https://dummyimage.com/600x400/f39f9f/ffc19b&text=Laptop+MSI+Gaming+Thin[3]"
        ],
        description: "• Laptop MSI nổi bật bởi thiết kế đầy cá tính. Logo rồng MSI khắc tinh tế trên nắp máy cùng những đường nét sắc sảo tạo nên một vẻ ngoài hiện đại, phù hợp không chỉ với các game thủ mà còn với người dùng văn phòng hoặc sinh viên cần mang máy đi học hoặc làm việc. Ngoài ra, khối lượng laptop cũng không quá nặng với 1.86 kg, tương đối phù hợp để mang theo cả ngày bên mình.",
        promotions: [
            "Phiếu mua hàng AirPods, Apple Watch, Macbook trị giá 500,000đ",
            "Tặng Phiếu mua hàng mua sạc dự phòng (trừ AVA+, Hydrus); đồng hồ thông minh (trừ Apple); Tai nghe bluetooth và Loa bluetooth các hãng JBL, Marshall,Harman Kardon; Ốp lưng (trừ Apple) trị giá 100.000đ",
            "Phiếu mua hàng máy lọc nước trị giá 300.000đ",
            "Phiếu mua hàng áp dụng mua tất cả sim có gói Mobi, Itel, Local, Vina ,VNMB và 2 gói cước (Siêu việt, 5G180) của Viettel trị giá 50,000đ.",
            "Thu cũ đổi mới: Giảm đến 2,000,000đ (Không kèm ưu đãi thanh toán qua cổng, mua kèm)",
            "Trả chậm 0% lãi suất. Đặc biệt giảm đến 10% tối đa 5 triệu khi thanh toán qua Kredivo",
            "Nhận ngay 200.000đ hoàn tiền khi mở thẻ tín dụng TPBank EVO và chi tiêu từ 1 triệu đồng"
        ]
    }
]