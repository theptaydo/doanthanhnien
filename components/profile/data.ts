import {
  Activity,
  Factory,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const stats = [
  { label: "Đoàn viên", value: "145+", color: "text-primary", icon: Users },
  { label: "Sáng kiến/năm", value: "38", color: "text-secondary", icon: Sparkles },
  { label: "Hoạt động cộng đồng", value: "22", color: "text-accent", icon: HeartHandshake },
  { label: "Chi đoàn trực thuộc", value: "6", color: "text-foreground", icon: Factory },
];

export const coreValues = [
  {
    title: "Sứ mệnh",
    description:
      "Kết nối đoàn viên trẻ, rèn luyện bản lĩnh chính trị và kỹ năng nghề nghiệp, đồng hành với các mục tiêu phát triển bền vững của doanh nghiệp.",
    icon: ShieldCheck,
    tone: "blue" as const,
  },
  {
    title: "Tầm nhìn",
    description:
      "Trở thành tổ chức Đoàn tiêu biểu trong khối doanh nghiệp công nghiệp khu vực Đồng bằng sông Cửu Long, tiên phong đổi mới và hội nhập.",
    icon: Activity,
    tone: "green" as const,
  },
  {
    title: "Giá trị cốt lõi",
    description:
      "Trách nhiệm, kỷ luật, sáng tạo và sẻ chia là kim chỉ nam cho mọi phong trào thanh niên tại Thép Tây Đô.",
    icon: Handshake,
    tone: "amber" as const,
  },
];

export const activities = [
  "Chiến dịch Mùa Hè Xanh và hiến máu nhân đạo định kỳ.",
  "Phong trào Thanh niên với chuyển đổi số trong quản lý sản xuất.",
  "Giải thể thao nội bộ và giao lưu liên đơn vị.",
  "Ngày thứ Bảy an toàn củng cố văn hóa 5S tại nhà máy.",
];

export type ExcellentMember = {
  slug: string;
  name: string;
  role: string;
  unit: string;
  image: string;
  achievement: string;
  participation: string[];
  professionalAchievements: string[];
  companyWork: string[];
};

export const excellentMembers: ExcellentMember[] = [
  {
    slug: "pham-huynh-thao-tran",
    name: "Phạm Huỳnh Thảo Trân",
    role: "Bí thư Đoàn",
    unit: "Khối Văn phòng",
    image: "/user/Female-72.jpg",
    achievement: "Điều phối hiệu quả 12 chương trình thanh niên năm 2026.",
    participation: [
      "Tham gia công tác Đoàn từ năm 2018 tại chi đoàn Văn phòng.",
      "Phụ trách điều phối các chiến dịch lớn như Tháng Thanh niên, Mùa Hè Xanh.",
      "Làm đầu mối kết nối giữa Đoàn Thanh niên, Công đoàn và các đơn vị bạn.",
    ],
    professionalAchievements: [
      "Hoàn thành chứng chỉ quản trị dự án nội bộ, áp dụng vào điều hành phong trào.",
      "Triển khai bộ KPI đánh giá hiệu quả hoạt động Đoàn theo quý.",
      "Đề xuất sáng kiến truyền thông số giúp tăng 2.1 lần mức độ tiếp cận bản tin nội bộ.",
    ],
    companyWork: [
      "Đảm nhiệm công tác tổng hợp kế hoạch nhân sự trẻ trong khối Văn phòng.",
      "Phối hợp đào tạo hội nhập cho nhân sự mới và chuẩn hóa quy trình nội bộ.",
      "Tham gia tổ thư ký các chương trình cải tiến văn hóa doanh nghiệp.",
    ],
  },
  {
    slug: "nguyen-hoang-minh",
    name: "Nguyễn Hoàng Minh",
    role: "Phó Bí thư",
    unit: "Phân xưởng Cán",
    image: "/user/Female-56.jpg",
    achievement: "Dẫn dắt 8 sáng kiến cải tiến quy trình hiện trường.",
    participation: [
      "Gia nhập tổ chức Đoàn năm 2017, phụ trách khối sản xuất trực tiếp.",
      "Đồng tổ chức định kỳ chương trình Ngày thứ Bảy an toàn.",
      "Hỗ trợ đào tạo kỹ năng hiện trường cho đoàn viên mới tại phân xưởng.",
    ],
    professionalAchievements: [
      "Đạt danh hiệu Lao động tiên tiến 3 năm liên tiếp.",
      "Chủ trì nhóm cải tiến giảm thời gian chuyển đổi ca sản xuất 11%.",
      "Được biểu dương trong phong trào Sáng kiến trẻ khối công nghiệp.",
    ],
    companyWork: [
      "Phụ trách giám sát tiến độ sản xuất theo kế hoạch ngày/tuần.",
      "Phối hợp với bộ phận kỹ thuật triển khai bảo trì chủ động thiết bị.",
      "Đảm bảo tuân thủ các chuẩn vận hành an toàn tại khu vực cán thép.",
    ],
  },
  {
    slug: "tran-thi-my-duyen",
    name: "Trần Thị Mỹ Duyên",
    role: "Ủy viên BCH",
    unit: "Phòng Nhân sự",
    image: "/user/Female-46.jpg",
    achievement: "Tổ chức chuỗi đào tạo kỹ năng mềm cho 140 đoàn viên.",
    participation: [
      "Tham gia BCH từ năm 2021, phụ trách mảng phát triển đoàn viên.",
      "Đồng hành các chương trình mentoring cho thanh niên khối văn phòng.",
      "Kết nối hoạt động giao lưu liên chi đoàn theo quý.",
    ],
    professionalAchievements: [
      "Xây dựng lộ trình kỹ năng mềm theo từng nhóm năng lực công việc.",
      "Phối hợp tổ chức 15 chuyên đề đào tạo trong 12 tháng.",
      "Được khen thưởng về sáng kiến nâng cao tỷ lệ tham gia đào tạo nội bộ.",
    ],
    companyWork: [
      "Phụ trách tuyển dụng khối lao động trẻ và chương trình hội nhập.",
      "Quản lý hồ sơ năng lực cán bộ nguồn và kế hoạch kế thừa.",
      "Tham gia xây dựng chính sách phúc lợi cho đoàn viên công ty.",
    ],
  },
  {
    slug: "le-quoc-an",
    name: "Lê Quốc An",
    role: "Ủy viên BCH",
    unit: "Phòng Kế hoạch",
    image: "/user/Female-38.jpg",
    achievement: "Xây dựng hệ thống theo dõi KPI phong trào theo quý.",
    participation: [
      "Tham gia Đoàn từ năm 2019, phụ trách mảng kế hoạch hoạt động.",
      "Theo dõi tiến độ thực hiện chỉ tiêu phong trào của các chi đoàn.",
      "Hỗ trợ công tác tổng kết, đánh giá và báo cáo định kỳ.",
    ],
    professionalAchievements: [
      "Thiết kế dashboard theo dõi KPI phong trào theo thời gian thực.",
      "Chuẩn hóa biểu mẫu lập kế hoạch giúp giảm thời gian tổng hợp 35%.",
      "Đề xuất cơ chế chấm điểm thi đua minh bạch giữa các chi đoàn.",
    ],
    companyWork: [
      "Lập kế hoạch sản xuất - vật tư theo nhu cầu từng giai đoạn.",
      "Theo dõi hiệu suất giao hàng và phối hợp tối ưu tồn kho.",
      "Hỗ trợ phân tích dữ liệu vận hành phục vụ ra quyết định quản trị.",
    ],
  },
  {
    slug: "pham-thanh-tung",
    name: "Phạm Thanh Tùng",
    role: "Ủy viên BCH",
    unit: "Bộ phận HSE",
    image: "/user/Female-16.jpg",
    achievement: "Triển khai chuyên đề Ngày thứ Bảy an toàn tại 3 phân xưởng.",
    participation: [
      "Gắn bó công tác Đoàn từ năm 2020 tại mảng an toàn vệ sinh lao động.",
      "Phụ trách nội dung truyền thông an toàn cho đoàn viên hiện trường.",
      "Tổ chức hoạt động kiểm tra nhanh theo tuần cùng các chi đoàn sản xuất.",
    ],
    professionalAchievements: [
      "Xây dựng 10 tình huống huấn luyện ứng phó rủi ro tại xưởng.",
      "Đề xuất mô hình báo cáo near-miss qua biểu mẫu số hóa.",
      "Góp phần giảm đáng kể vi phạm thao tác an toàn lặp lại.",
    ],
    companyWork: [
      "Kiểm tra tuân thủ PPE và quy trình thao tác chuẩn tại hiện trường.",
      "Phối hợp điều tra sự cố và đề xuất biện pháp phòng ngừa.",
      "Tham gia đào tạo định kỳ về PCCC và sơ cấp cứu ban đầu.",
    ],
  },
  {
    slug: "doan-ngoc-han",
    name: "Đoàn Ngọc Hân",
    role: "Cán bộ công tác Đoàn",
    unit: "Chi đoàn Cơ điện",
    image: "/user/Female-9.jpg",
    achievement: "Phụ trách truyền thông nội bộ, tăng 60% tương tác bản tin Đoàn.",
    participation: [
      "Tham gia công tác Đoàn từ năm 2022 tại chi đoàn Cơ điện.",
      "Phối hợp ghi nhận tư liệu hoạt động và xây dựng nội dung truyền thông.",
      "Hỗ trợ vận hành các kênh nội bộ phục vụ tuyên truyền phong trào.",
    ],
    professionalAchievements: [
      "Chuẩn hóa mẫu tin nhanh cho truyền thông sự kiện nội bộ.",
      "Phối hợp sản xuất chuỗi bài viết gương điển hình lao động trẻ.",
      "Đạt giải truyền thông sáng tạo trong hội thi cấp cụm.",
    ],
    companyWork: [
      "Phụ trách theo dõi bảo trì thiết bị phụ trợ khối cơ điện.",
      "Hỗ trợ lập kế hoạch vật tư thay thế theo chu kỳ.",
      "Tham gia tối ưu quy trình bàn giao thiết bị sau bảo trì.",
    ],
  },
  {
    slug: "vo-thanh-dat",
    name: "Võ Thành Đạt",
    role: "Cán bộ công tác Đoàn",
    unit: "Chi đoàn Kho vận",
    image: "/user/Female-2.jpg",
    achievement: "Điều phối thành công 4 chương trình thiện nguyện cộng đồng.",
    participation: [
      "Gia nhập công tác Đoàn năm 2021, phụ trách mảng hậu cần hoạt động.",
      "Điều phối nhân sự và phương tiện cho các chương trình thiện nguyện.",
      "Kết nối nguồn lực giữa các chi đoàn để triển khai sự kiện đúng tiến độ.",
    ],
    professionalAchievements: [
      "Tối ưu phương án vận chuyển giúp giảm 15% chi phí hậu cần sự kiện.",
      "Đề xuất mô hình phối hợp liên chi đoàn theo cụm địa bàn.",
      "Được khen thưởng về năng lực điều phối và phản ứng nhanh.",
    ],
    companyWork: [
      "Quản lý vận hành kho thành phẩm và luồng xuất - nhập hàng hóa.",
      "Theo dõi KPI giao nhận và an toàn xếp dỡ.",
      "Phối hợp cải tiến sơ đồ lưu kho, rút ngắn thời gian tìm hàng.",
    ],
  },
  {
    slug: "nguyen-thao-nhi",
    name: "Nguyễn Thảo Nhi",
    role: "Cán bộ công tác Đoàn",
    unit: "Chi đoàn Tài chính",
    image: "/user/Female-72.jpg",
    achievement: "Thúc đẩy mô hình Quỹ sẻ chia hỗ trợ đoàn viên khó khăn.",
    participation: [
      "Tham gia tổ chức Đoàn từ năm 2020, phụ trách các chương trình an sinh.",
      "Đồng hành quản lý Quỹ sẻ chia cho đoàn viên có hoàn cảnh khó khăn.",
      "Phối hợp triển khai các đợt vận động nội bộ theo chuyên đề.",
    ],
    professionalAchievements: [
      "Xây dựng quy trình minh bạch hóa nguồn quỹ và báo cáo định kỳ.",
      "Tối ưu theo dõi dòng hỗ trợ bằng biểu mẫu số hóa.",
      "Được biểu dương về sáng kiến quản trị quỹ cộng đồng hiệu quả.",
    ],
    companyWork: [
      "Phụ trách đối soát chi phí nội bộ và báo cáo tài chính bộ phận.",
      "Hỗ trợ lập ngân sách cho các chương trình đào tạo thanh niên.",
      "Phối hợp kiểm soát tuân thủ tài chính trong các hoạt động sự kiện.",
    ],
  },
];

export const committee = excellentMembers.slice(0, 4).map(({ role, name }) => ({
  role,
  name,
}));

export function getExcellentMemberBySlug(slug: string): ExcellentMember | undefined {
  return excellentMembers.find((member) => member.slug === slug);
}

export const gallery = ["Chiến dịch hè", "Văn nghệ", "An toàn lao động", "Thiện nguyện"];
