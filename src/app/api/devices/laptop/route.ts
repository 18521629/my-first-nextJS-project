import type {DeviceProps} from '../type'

export const MOCK_DATA_LAPTOP: DeviceProps[] = [
    {
        id: 1, 
        deviceName: "Macbook Air M3", 
        slug: "macbook-air-m3", 
        core: 10,
        threads: "Unknown",
        cpu: "120 GB/s memory bandwidth", 
        ram: "16 GB", 
        memory: "256 GB SSD",
        price: 30390000,
        imageUrl: [
            "",
            "",
            ""
        ],
        description: "MacBook Air 15 inch được xây dựng trên tiến trình 3 nm thế hệ thứ hai hiện đại, giúp tối ưu hóa hiệu suất và tiết kiệm năng lượng đáng kể. Với 10 nhân CPU và băng thông bộ nhớ lên đến 120 GB/s, chiếc MacBook Air này có thể xử lý mượt mà từ các tác vụ văn phòng đến thiết kế đồ họa và lập trình phức tạp."
    },
    {
        id: 2, 
        deviceName: "Laptop Asus Zenbook 14", 
        slug: "asus-zenbook-14", 
        core: 4,
        threads: 8,
        cpu: "2.80 GHz (Lên đến 4.30 GHz khi tải nặng)", 
        ram: "16 GB", 
        memory: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1 TB)", 
        price: 12690000,
        imageUrl: [
            "",
            "",
            ""
        ],
        description: "Kiểu dáng đã quá quen thuộc đến từ các dòng Vivobook nhà Asus, tuy vậy nhưng với thiết kế ngoại hình tối giản hiện đại như vậy, cá nhân mình lại nhận thấy cực kì phù hợp với xu hướng thời trang hiện nay. Laptop Asus vẫn giữ được nét thuần tuý với gam màu bạc sáng khá thu hút, vỏ được chế tác bằng nhựa nhưng lại rất cứng cáp, độ bền lại còn được đảm bảo chuẩn quân đội MIL STD 810H và các bề mặt được gia công ghép nối rất kĩ, nên mình chỉ việc trang bị thêm một chiếc túi chống sốc là có thể an tâm mang theo mọi nơi rồi."
    },
    {
        id: 3, 
        deviceName: "Laptop MSI Gaming Thin", 
        slug: "msi-gaming-thin", 
        core: 8,
        threads: 12,
        cpu: "2.10 GHz (Lên đến 4.60 GHz khi tải nặng)", 
        ram: "16 GB", 
        memory: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 4 TB)", 
        price: 16690000,
        imageUrl: [
            "",
            "",
            ""
        ],
        description: "• Laptop MSI nổi bật bởi thiết kế đầy cá tính. Logo rồng MSI khắc tinh tế trên nắp máy cùng những đường nét sắc sảo tạo nên một vẻ ngoài hiện đại, phù hợp không chỉ với các game thủ mà còn với người dùng văn phòng hoặc sinh viên cần mang máy đi học hoặc làm việc. Ngoài ra, khối lượng laptop cũng không quá nặng với 1.86 kg, tương đối phù hợp để mang theo cả ngày bên mình."
    }
]