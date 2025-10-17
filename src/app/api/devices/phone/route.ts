import type {DeviceProps} from '../type'

export const MOCK_DATA_PHONES: DeviceProps[] = [
    {
        id: 1, 
        deviceName: "Điện thoại iPhone 16e 128GB", 
        slug: "iphone-16e", 
        system: {
            os: "iOS 18", 
            cpu: "Apple A18 6 nhân", 
            ram: "8 GB", 
            memory: "128GB", 
            memoryAvailable: "113GB",
        },
        price: 15890000,
        imageUrl: [
            "https://dummyimage.com/600x400/b3beff/ffbbe2&text=iphone16e[1]",
            "https://dummyimage.com/600x400/deded1/fbf3d1&text=iphone16e[2]",
            "https://dummyimage.com/600x400/b0ce88/4c763b&text=iphone16e[3]"
        ],
        description: "iPhone 16e vừa gia nhập đại gia đình iPhone của Apple, với thiết kế tinh gọn và hiệu suất xử lý ấn tượng. Mẫu điện thoại này có giá phải chăng, tích hợp Apple Intelligence và tính năng AI thông minh, hứa hẹn mang đến trải nghiệm thú vị cho người dùng.",
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
        deviceName: "Điện thoại Samsung S25", 
        slug: "samsung-s25", 
        system: {
            os: "Android 15", 
            cpu: "4.47 GHz", 
            ram: "12 GB", 
            memory: "256GB", 
            memoryAvailable: "223.5 GB",
        },
        price: 16690000,
        imageUrl: [
            "https://dummyimage.com/600x400/5c3e94/f25912&text=samsungS25[1]",
            "https://dummyimage.com/600x400/ffa4a4/badfdb&text=samsungS25[2]",
            "https://dummyimage.com/600x400/4e56c0/fdcffa&text=samsungS25[3]"
        ],
        description: "Galaxy S25 tiếp tục kế thừa những nét đặc trưng từ các thế hệ trước, nhưng có sự tinh chỉnh mang lại vẻ ngoài sang trọng và hiện đại hơn. Máy vẫn giữ kiểu dáng vuông vức, với các góc được bo nhẹ nhàng, tạo cảm giác mạnh mẽ nhưng không kém phần tinh tế.",
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
        deviceName: "Điện thoại Oppo Reno13", 
        slug: "oppo-reno13", 
        system: {
            os: "Android 15", 
            cpu: "4 nhân 2.2 GHz & 4 nhân 1.8 GHz", 
            ram: "8 GB", 
            memory: "256GB", 
            memoryAvailable: "239 GB",
        },
        price: 9610000,
        imageUrl: [
            "https://dummyimage.com/600x400/80a1ba/91c4c3&text=Oppo+Reno13[1]",
            "https://dummyimage.com/600x400/d97d55/6fa4af&text=Oppo+Reno13[2]",
            "https://dummyimage.com/600x400/b4debd/fff7dd&text=Oppo+Reno13[3]"
        ],
        description: "OPPO Reno13 F 5G được trang bị con chip Snapdragon 6 Gen 1 5G, một con chip nổi bật trong phân khúc vi xử lý tầm trung. Với cấu trúc 8 nhân, có xung nhịp cao nhất là 2.2 GHz, hứa hẹn mang đến hiệu năng xử lý mượt mà cho việc lướt web, xem phim cho đến chơi game.",
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