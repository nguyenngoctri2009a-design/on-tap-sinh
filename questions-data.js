const questions = [
  {
    "id": 1,
    "question": "Bốn loại đơn phân cấu tạo nên DNA là",
    "options": {
      "A": "A, U, G, C.",
      "B": "A, T, G, C.",
      "C": "A, U, G, T.",
      "D": "U, T, G, A."
    },
    "answer": "B",
    "explanation": "DNA được cấu tạo từ 4 loại đơn phân (nucleotide): Adenine (A), Thymine (T), Guanine (G), Cytosine (C)."
  },
  {
    "id": 2,
    "question": "Trong quá trình tái bản DNA, nucleotide loại A (Adenine) sẽ liên kết với loại nucleotide nào của môi trường nội bào để tổng hợp mạch DNA mới?",
    "options": {
      "A": "C (Cytosine).",
      "B": "U (Uracil).",
      "C": "T (Thymine).",
      "D": "G (Guanine)."
    },
    "answer": "C",
    "explanation": "Theo nguyên tắc bổ sung trong tái bản DNA: A liên kết với T (bằng 2 liên kết H), G liên kết với C (bằng 3 liên kết H)."
  },
  {
    "id": 3,
    "question": "Nguyên tắc bổ sung thể hiện trong cấu trúc của phân tử DNA là:",
    "options": {
      "A": "A liên kết với U, T liên kết với A, G liên kết với C, C liên kết với G.",
      "B": "A liên kết với T, T liên kết với A, G liên kết với C, C liên kết với G.",
      "C": "A liên kết với T, U liên kết với A, G liên kết với C, C liên kết với G.",
      "D": "A liên kết với C, T liên kết với A, G liên kết với U, C liên kết với G."
    },
    "answer": "B",
    "explanation": "Trong chuỗi xoắn kép DNA, các base liên kết bổ sung từng đôi một: A - T, T - A, G - C, C - G."
  },
  {
    "id": 4,
    "question": "Khi nói về quá trình tái bản DNA, phát biểu nào sau đây không chính xác?",
    "options": {
      "A": "Diễn ra theo nguyên tắc bổ sung và nguyên tắc bán bảo toàn.",
      "B": "Các mạch mới đều được tổng hợp liên tục theo chiều 5' - 3'.",
      "C": "Cả hai mạch của DNA đều được dùng làm khuôn mẫu để tổng hợp mạch DNA mới.",
      "D": "Có sự tham gia của enzyme DNA polymerase."
    },
    "answer": "B",
    "explanation": "DNA polymerase chỉ tổng hợp mạch mới theo chiều 5' -> 3'. Do hai mạch khuôn có chiều ngược nhau nên một mạch được tổng hợp liên tục, mạch còn lại được tổng hợp gián đoạn thành các đoạn Okazaki rồi nối lại."
  },
  {
    "id": 5,
    "question": "Chức năng của DNA là",
    "options": {
      "A": "mang, bảo quản và truyền đạt thông tin di truyền.",
      "B": "dự trữ và cung cấp năng lượng cho tế bào.",
      "C": "cấu trúc nên màng sinh chất và các bào quan của tế bào.",
      "D": "tham gia vào quá trình chuyển hóa vật chất trong tế bào."
    },
    "answer": "A",
    "explanation": "DNA có chức năng mang, bảo quản và truyền đạt thông tin di truyền ở cấp độ phân tử."
  },
  {
    "id": 6,
    "question": "Gene là một đoạn của phân tử ... mang thông tin quy định sản phẩm xác định là chuỗi polypeptide hoặc phân tử RNA. Trong dấu ... là",
    "options": {
      "A": "protein.",
      "B": "DNA.",
      "C": "nucleic acid.",
      "D": "carbohydrate."
    },
    "answer": "B",
    "explanation": "Định nghĩa: Gene là một đoạn của phân tử DNA mang thông tin mã hóa cho một sản phẩm xác định (chuỗi polypeptide hoặc phân tử RNA)."
  },
  {
    "id": 7,
    "question": "Để phân loại gene cấu trúc và gene điều hòa người ta dựa vào:",
    "options": {
      "A": "chức năng sản phẩm của gene.",
      "B": "sự biểu hiện kiểu hình của gene.",
      "C": "kiểu tác động của gene.",
      "D": "cấu trúc của gene."
    },
    "answer": "A",
    "explanation": "Phân loại gene cấu trúc (tạo protein cấu trúc hoặc enzyme) và gene điều hòa (tạo protein điều hòa kiểm soát hoạt động gene khác) dựa vào chức năng sản phẩm của gene."
  },
  {
    "id": 8,
    "question": "Một gene cấu trúc gồm 3 vùng theo trình tự là",
    "options": {
      "A": "vùng điều hòa – vùng mã hóa – vùng kết thúc.",
      "B": "vùng mã hóa – vùng điều hòa – vùng kết thúc.",
      "C": "vùng điều hòa – vùng kết thúc – vùng mã hóa.",
      "D": "vùng mã hóa – vùng kết thúc – vùng điều hòa."
    },
    "answer": "A",
    "explanation": "Một gene cấu trúc điển hình gồm 3 vùng theo thứ tự: Vùng điều hòa (đầu 3' mạch gốc) -> Vùng mã hóa -> Vùng kết thúc (đầu 5' mạch gốc)."
  },
  {
    "id": 9,
    "question": "Khi nói về mã di truyền, phát biểu nào sau đây đúng?",
    "options": {
      "A": "Mỗi loài sinh vật có một bộ mã di truyền riêng.",
      "B": "Mã di truyền là mã bộ ba, cứ 3 nucleotide liền nhau tạo thành một mã di truyền.",
      "C": "Mã di truyền có tính thoái hóa nghĩa là mỗi bộ ba chỉ mã hóa cho một amino acid.",
      "D": "Trên phân tử mRNA, mã di truyền được đọc theo chiều từ 3' đến 5'."
    },
    "answer": "B",
    "explanation": "Mã di truyền là mã bộ ba (cứ 3 nucleotide liền nhau mã hóa 1 amino acid), đọc liên tục không gối lên nhau theo chiều 5' -> 3'."
  },
  {
    "id": 10,
    "question": "Bốn loại đơn phân cấu tạo nên RNA là",
    "options": {
      "A": "A, U, G, C.",
      "B": "A, T, G, C.",
      "C": "A, U, G, T.",
      "D": "U, T, G, A."
    },
    "answer": "A",
    "explanation": "Đơn phân cấu tạo nên RNA là 4 loại ribonucleotide: A, U, G, C (không có T)."
  },
  {
    "id": 11,
    "question": "Bộ ba nào sau đây là bộ ba mở đầu trên phân tử mRNA?",
    "options": {
      "A": "3' UGA 5'.",
      "B": "3' UAA 5'.",
      "C": "5' AUG 3'.",
      "D": "5' UAG 3'."
    },
    "answer": "C",
    "explanation": "Bộ ba mở đầu trên mRNA là 5' AUG 3', quy định amino acid mở đầu (Methionine ở sinh vật nhân thực, Formylmethionine ở sinh vật nhân sơ)."
  },
  {
    "id": 12,
    "question": "Bộ ba 5'AUG3' chỉ mã hoá cho methionine ở sinh vật nhân thực, điều này chứng tỏ mã di truyền có tính",
    "options": {
      "A": "thoái hoá.",
      "B": "đặc hiệu.",
      "C": "phổ biến.",
      "D": "liên tục."
    },
    "answer": "B",
    "explanation": "Tính đặc hiệu của mã di truyền: Một bộ ba chỉ mã hóa cho một loại amino acid duy nhất."
  },
  {
    "id": 13,
    "question": "Một đoạn mạch khuôn (mạch gốc) của gene có trình tự các nucleotide là 3' ATGCGAAGC 5'. Phân tử mRNA được phiên mã từ gene này sẽ có trình tự nucleotide là",
    "options": {
      "A": "3' UACGCUUCG 5'.",
      "B": "5' UACGCUUCG 3'.",
      "C": "5' TACGCTTCG 3'.",
      "D": "3' TACGCTTCG 5'."
    },
    "answer": "B",
    "explanation": "Theo nguyên tắc bổ sung trong phiên mã: A gốc -> U, T gốc -> A, G gốc -> C, C gốc -> G. Mạch khuôn 3' -> 5' tổng hợp mRNA theo chiều ngược lại 5' -> 3': 3' ATGCGAAGC 5' -> 5' UACGCUUCG 3'."
  },
  {
    "id": 14,
    "question": "Một đoạn phân tử mRNA có trình tự nucleotide như sau: 5' AAC GGU CCG 3'. Trình tự nào dưới đây mô tả đúng mạch khuôn của đoạn gene đã phiên mã ra mRNA trên?",
    "options": {
      "A": "5' UUG CCU GGC 3'.",
      "B": "3' UUC GGA GGC 5'.",
      "C": "5' AAC GGA CCG 3'.",
      "D": "3' TTG CCA GGC 5'."
    },
    "answer": "D",
    "explanation": "mRNA: 5' AAC GGU CCG 3' -> Mạch khuôn đối song song và bổ sung (A liên kết T, U liên kết A, G liên kết C, C liên kết G): 3' TTG CCA GGC 5'."
  },
  {
    "id": 15,
    "question": "Thành phần nào sau đây không có trong mô hình operon Lac ở vi khuẩn E. coli?",
    "options": {
      "A": "Gene điều hòa lacI.",
      "B": "Vùng khởi động promoter.",
      "C": "Vùng vận hành operator.",
      "D": "Nhóm gene cấu trúc lacZ, lacY, lacA."
    },
    "answer": "A",
    "explanation": "Mô hình Operon Lac chỉ gồm: Vùng khởi động (P), Vùng vận hành (O), Nhóm gene cấu trúc (Z, Y, A). Gene điều hòa lacI không thuộc thành phần của operon Lac."
  },
  {
    "id": 16,
    "question": "Vị trí nào sau đây trong cấu trúc của Operon Lac liên kết với protein điều hoà?",
    "options": {
      "A": "Nhóm gene cấu trúc.",
      "B": "Gen điều hoà (lacI).",
      "C": "Vùng promoter (P).",
      "D": "Vùng operator (O)."
    },
    "answer": "D",
    "explanation": "Vùng vận hành (O - operator) là vị trí bám của protein ức chế để ngăn cản quá trình phiên mã của RNA polymerase."
  },
  {
    "id": 17,
    "question": "Thành phần nào sau đây là nơi enzyme RNA polymerase bám vào để khởi đầu phiên mã nhóm gene cấu trúc lacZ, lacY, lacA?",
    "options": {
      "A": "Vùng O (operator).",
      "B": "Các gene cấu trúc lacZ, lacY, lacA.",
      "C": "Vùng P (promoter).",
      "D": "Gene điều hòa lacI."
    },
    "answer": "C",
    "explanation": "Vùng khởi động (P - promoter) là nơi mà enzyme RNA polymerase bám vào để khởi đầu quá trình phiên mã."
  },
  {
    "id": 18,
    "question": "Trong các hình dưới, hình nào mô tả đúng cấu trúc của một operon lac ở vi khuẩn E.coli?\nHình 1: [ P ][ O ][ lacA ][ lacY ][ lacZ ]\nHình 2: [ O ][ P ][ lacZ ][ lacY ][ lacA ]\nHình 3: [ O ][ P ][ lacY ][ lacZ ][ lacA ]\nHình 4: [ P ][ O ][ lacZ ][ lacY ][ lacA ]",
    "options": {
      "A": "Hình 1.",
      "B": "Hình 2.",
      "C": "Hình 3.",
      "D": "Hình 4."
    },
    "answer": "D",
    "explanation": "Thứ tự các thành phần trong operon Lac từ trái sang phải là: Promoter (P) -> Operator (O) -> lacZ -> lacY -> lacA (Hình 4)."
  },
  {
    "id": 19,
    "question": "Trong cơ chế điều hòa hoạt động của operon lac, sự kiện nào sau đây diễn ra cả khi môi trường có lactose và khi môi trường không có lactose?",
    "options": {
      "A": "Một số phân tử lactose liên kết với protein ức chế.",
      "B": "Gene điều hòa lacI tổng hợp protein ức chế.",
      "C": "Các gene cấu trúc Z, Y, A phiên mã tạo ra các phân tử RNA tương ứng.",
      "D": "RNA polymerase liên kết với vùng khởi động của operon lac và tiến hành phiên mã."
    },
    "answer": "B",
    "explanation": "Gene điều hòa lacI hoạt động liên tục (phiên mã và dịch mã tổng hợp protein ức chế) không phụ thuộc vào sự có mặt hay vắng mặt của chất cảm ứng lactose."
  },
  {
    "id": 20,
    "question": "Hình ảnh mô tả gene ban đầu có 7 cặp nu (ATGGTCC / TACCAGG), sau đó trở thành 8 cặp nu (ATGAGTCC / TACTCAGG) (được chèn thêm 1 cặp A-T ở vị trí thứ 4). Đây là dạng đột biến gene nào?",
    "options": {
      "A": "Thay thế 1 cặp nucleotide.",
      "B": "Mất một cặp nucleotide.",
      "C": "Thêm một cặp nucleotide.",
      "D": "Đảo vị trí 1 cặp nucleotide."
    },
    "answer": "C",
    "explanation": "Gene đột biến có chiều dài tăng thêm 1 cặp nucleotide (chèn thêm cặp A - T), nên đây là dạng đột biến thêm một cặp nucleotide."
  },
  {
    "id": 21,
    "question": "Những biến đổi trong cấu trúc của gene, liên quan đến một hoặc một số cặp nucleotide gọi là",
    "options": {
      "A": "mất đoạn gene.",
      "B": "thường biến.",
      "C": "đột biến gene.",
      "D": "đột biến nhiễm sắc thể."
    },
    "answer": "C",
    "explanation": "Định nghĩa: Đột biến gene là những biến đổi trong cấu trúc của gene, liên quan đến một hoặc một số cặp nucleotide."
  },
  {
    "id": 22,
    "question": "Sơ đồ thể hiện cơ chế phát sinh đột biến dưới tác động của 5-BU: A-T qua các lần tái bản chuyển thành A-5BU -> G-5BU -> G-C. Sơ đồ này thể hiện cơ chế phát sinh đột biến nào?",
    "options": {
      "A": "Thêm 1 cặp nucleotide.",
      "B": "Mất 1 cặp nucleotide.",
      "C": "Thay thế 1 cặp G-C bằng A-T.",
      "D": "Thay thế 1 cặp A-T bằng G-C."
    },
    "answer": "D",
    "explanation": "Chất 5-bromouracil (5-BU) là đồng đẳng của thymine, có thể bắt đôi với A rồi biến đổi cấu trúc để bắt đôi với G, dẫn đến thay thế cặp A-T thành cặp G-C."
  },
  {
    "id": 23,
    "question": "Hãy ghép thông tin ở cột Loại tác nhân đột biến và cột Ví dụ cho phù hợp:\nLoại tác nhân: 1. Tác nhân vật lí, 2. Tác nhân hóa học, 3. Tác nhân sinh học.\nVí dụ: a. Virus HPV, b. Tia UV, c. 5-bromouracil.",
    "options": {
      "A": "1 - a, 2 - b, 3 - c",
      "B": "1 - b, 2 - c, 3 - a",
      "C": "1 - c, 2 - a, 3 - b",
      "D": "1 - b, 2 - a, 3 - c"
    },
    "answer": "B",
    "explanation": "Tác nhân vật lí: Tia UV (1-b); Tác nhân hóa học: 5-bromouracil (2-c); Tác nhân sinh học: Virus HPV (3-a)."
  },
  {
    "id": 24,
    "question": "Loại đột biến nào sau đây làm cho gene đột biến tăng 2 liên kết hydrogen so với gene ban đầu?",
    "options": {
      "A": "Mất 1 cặp A – T.",
      "B": "Thêm 1 cặp A – T.",
      "C": "Thay thế 1 cặp A – T bằng 1 cặp G – C.",
      "D": "Thay thế 2 cặp C – G bằng 1 cặp A – T."
    },
    "answer": "B",
    "explanation": "Một cặp A - T liên kết với nhau bằng 2 liên kết hydrogen. Do đó, khi thêm 1 cặp A - T, số liên kết hydrogen của gene sẽ tăng thêm đúng 2 liên kết."
  },
  {
    "id": 25,
    "question": "Cho một đoạn DNA mạch khuôn của gene cấu trúc có trình tự: 3' ...TACAGACCACTTTCGTGGG... 5'. Khi xảy ra đột biến thay cặp A – T ở vị trí số 2 bằng cặp G – C trên đoạn gene này thì hậu quả (thể hiện ở sản phẩm dịch mã) có thể xảy ra là",
    "options": {
      "A": "thay đổi toàn bộ các amino acid trên chuỗi polypeptide.",
      "B": "thay đổi amino acid đầu tiên bằng một loại amino acid khác.",
      "C": "quá trình dịch mã không xảy ra.",
      "D": "quá trình dịch mã vẫn thực hiện."
    },
    "answer": "C",
    "explanation": "Bộ ba mã mở đầu trên mạch khuôn là 3' TAC 5' (tương ứng 5' AUG 3' trên mRNA). Thay nucleotide thứ 2 (A -> G) làm bộ ba mở đầu biến thành 3' TGC 5' (mRNA thành 5' GCA 3'), không còn là mã mở đầu nên quá trình dịch mã không thể bắt đầu được."
  },
  {
    "id": 26,
    "question": "Công nghệ nào sau đây là quy trình kĩ thuật tạo ra phân tử DNA từ hai nguồn khác nhau (thường từ hai loài) rồi chuyển vào tế bào nhận?",
    "options": {
      "A": "công nghệ tế bào.",
      "B": "công nghệ sinh học.",
      "C": "công nghệ DNA tái tổ hợp.",
      "D": "công nghệ vi sinh vật."
    },
    "answer": "C",
    "explanation": "Công nghệ DNA tái tổ hợp là quy trình kỹ thuật tạo ra phân tử DNA từ hai nguồn khác nhau rồi chuyển vào tế bào nhận để tạo sinh vật biến đổi gen."
  },
  {
    "id": 27,
    "question": "Ví dụ nào sau đây mô tả thành tựu của công nghệ tạo động vật chuyển gene?",
    "options": {
      "A": "Cừu chuyển gene có khả năng tổng hợp protein antithrombin của người.",
      "B": "Giống lúa vàng chuyển gene tổng hợp β – carotene.",
      "C": "Giống bông chuyển gene có gene được lấy từ vi khuẩn tạo ra độc tố chống lại sâu hại.",
      "D": "Vi khuẩn E.coli mang gene sản xuất insulin của người."
    },
    "answer": "A",
    "explanation": "Cừu là động vật, việc tạo ra cừu chuyển gene tổng hợp protein antithrombin là thành tựu chuyển gen ở động vật. Lúa, bông là thực vật; E.coli là vi sinh vật."
  },
  {
    "id": 28,
    "question": "Khi nói về nguyên lí tạo động vật và thực vật chuyển gene, phát biểu nào sau đây đúng?",
    "options": {
      "A": "Đều dựa trên công nghệ thụ tinh nhân tạo.",
      "B": "Đều dựa trên công nghệ nuôi cấy tế bào.",
      "C": "Đều dựa trên công nghệ DNA tái tổ hợp.",
      "D": "Đều tiến hành theo các bước giống nhau."
    },
    "answer": "C",
    "explanation": "Cả tạo động vật và thực vật chuyển gen đều có chung nguyên lí là ứng dụng công nghệ DNA tái tổ hợp để đưa gen lạ vào hệ gen của vật chủ."
  },
  {
    "id": 29,
    "question": "Trong cấu trúc siêu hiển vi của nhiễm sắc thể nhân thực, sợi cơ bản (chuỗi nucleosome) có đường kính là",
    "options": {
      "A": "30nm.",
      "B": "10nm.",
      "C": "300nm.",
      "D": "700nm."
    },
    "answer": "B",
    "explanation": "Sợi cơ bản có đường kính khoảng 10nm (hoặc 11nm). Sợi nhiễm sắc: 30nm; Sợi siêu cuộn: 300nm; Chromatid: 700nm."
  },
  {
    "id": 30,
    "question": "Chromatid có đường kính 700nm được quan sát rõ nhất ở kì nào của quá trình phân bào?",
    "options": {
      "A": "Kì đầu.",
      "B": "Kì giữa.",
      "C": "Kì sau.",
      "D": "Kì cuối."
    },
    "answer": "B",
    "explanation": "Ở kì giữa của nguyên phân, nhiễm sắc thể đóng xoắn cực đại, có hình thái đặc trưng và dễ quan sát nhất dưới kính hiển vi."
  },
  {
    "id": 31,
    "question": "Trên nhiễm sắc thể, mỗi gene định vị tại một vị trí xác định gọi là",
    "options": {
      "A": "locus.",
      "B": "allele.",
      "C": "tâm động.",
      "D": "chromatid."
    },
    "answer": "A",
    "explanation": "Locus là vị trí xác định của một gene trên nhiễm sắc thể."
  },
  {
    "id": 32,
    "question": "Ở sinh vật nhân thực, nhiễm sắc thể được cấu trúc bởi 2 thành phần chủ yếu là:",
    "options": {
      "A": "RNA và protein.",
      "B": "DNA và protein.",
      "C": "DNA và tRNA.",
      "D": "DNA và mRNA."
    },
    "answer": "B",
    "explanation": "Nhiễm sắc thể ở sinh vật nhân thực cấu tạo chủ yếu gồm phân tử DNA liên kết với các khối protein (chủ yếu là histone)."
  },
  {
    "id": 33,
    "question": "Ở các loài sinh sản vô tính, bộ NST ổn định được duy trì không đổi qua các thế hệ tế bào và thế hệ cơ thể là nhờ vào quá trình",
    "options": {
      "A": "thụ tinh.",
      "B": "nguyên phân.",
      "C": "nguyên phân và giảm phân.",
      "D": "nguyên phân, giảm phân và thụ tinh."
    },
    "answer": "B",
    "explanation": "Sinh sản vô tính dựa trên cơ chế nguyên phân (không qua giảm phân và thụ tinh) để duy trì bộ NST đặc trưng của loài."
  },
  {
    "id": 34,
    "question": "Nhiễm sắc thể được xếp gọn trong nhân tế bào và đảm bảo cho sự phân li, tổ hợp các nhiễm sắc thể trong quá trình phân bào là nhờ",
    "options": {
      "A": "được cấu tạo từ hai thành phần là DNA và protein.",
      "B": "sự hình thành các nucleosome trong cấu trúc siêu hiển vi.",
      "C": "sự cuộn xoắn nhiều bậc trong cấu trúc siêu hiển vi.",
      "D": "được cấu tạo theo nguyên tắc đa phân từ đơn phân là nucleosome."
    },
    "answer": "C",
    "explanation": "Sự cuộn xoắn theo nhiều cấp độ giúp thu ngắn chiều dài phân tử DNA hàng nghìn lần, xếp gọn vào nhân và tránh rối loạn/đứt gãy khi phân li trong phân bào."
  },
  {
    "id": 35,
    "question": "Trong quá trình nghiên cứu để phát hiện ra các quy luật di truyền, Mendel đã sử dụng đối tượng nào sau đây để nghiên cứu di truyền?",
    "options": {
      "A": "Ruồi giấm.",
      "B": "Đậu hà lan.",
      "C": "Cây hoa phấn.",
      "D": "Hoa loa kèn."
    },
    "answer": "B",
    "explanation": "Gregor Mendel tiến hành các thí nghiệm lai giống trên cây Đậu Hà Lan (Pisum sativum)."
  },
  {
    "id": 36,
    "question": "Theo quan niệm về giao tử của Mendel, mỗi tính trạng của cơ thể do",
    "options": {
      "A": "một nhân tố di truyền quy định.",
      "B": "một gene quy định.",
      "C": "một cặp allele quy định.",
      "D": "một cặp nhân tố di truyền quy định."
    },
    "answer": "D",
    "explanation": "Theo Mendel, mỗi tính trạng do một cặp nhân tố di truyền (sau này gọi là cặp allele) quy định; trong tế bào giao tử chỉ chứa một nhân tố di truyền của cặp."
  },
  {
    "id": 37,
    "question": "Nhà khoa học nào được công nhận là “người đặt nền móng cho di truyền học hiện đại”?",
    "options": {
      "A": "G. J. Mendel",
      "B": "J. Monod",
      "C": "F. Jacob",
      "D": "Correns."
    },
    "answer": "A",
    "explanation": "Gregor Johann Mendel (1822 - 1884) được công nhận là cha đẻ, người đặt nền móng cho di truyền học hiện đại."
  },
  {
    "id": 38,
    "question": "Kiểu gen nào sau đây là kiểu gen đồng hợp về 1 cặp gene?",
    "options": {
      "A": "AABB.",
      "B": "aaBB.",
      "C": "AaBB.",
      "D": "AaBb."
    },
    "answer": "C",
    "explanation": "AaBB dị hợp về cặp Aa (1 cặp dị hợp) và đồng hợp về cặp BB (1 cặp đồng hợp), do đó là đồng hợp về 1 cặp gene."
  },
  {
    "id": 39,
    "question": "Cho biết kiểu gene nào sau đây là kiểu gene thuần chủng cả 3 cặp gene?",
    "options": {
      "A": "AABbDd.",
      "B": "aaBBdd.",
      "C": "AaBbDd.",
      "D": "AABBDd."
    },
    "answer": "B",
    "explanation": "Kiểu gen thuần chủng là kiểu gen đồng hợp về tất cả các cặp gen đang xét. Trong các đáp án, aaBBdd đồng hợp cả 3 cặp."
  },
  {
    "id": 40,
    "question": "Mendel đã sử dụng biện pháp nào sau đây để kiểm tra kiểu gene của cơ thể có kiểu hình trội?",
    "options": {
      "A": "Lai phân tích",
      "B": "Lai cải tiến giống",
      "C": "Lai thuận nghịch",
      "D": "Lai xa."
    },
    "answer": "A",
    "explanation": "Lai phân tích là phép lai giữa cá thể mang tính trạng trội cần xác định kiểu gen với cá thể mang tính trạng lặn."
  },
  {
    "id": 41,
    "question": "Biết rằng allele A quy định hoa đỏ trội hoàn toàn so với allele a quy định hoa trắng, phép lai nào cho đời con có 50% hoa đỏ?",
    "options": {
      "A": "Aa × AA.",
      "B": "Aa × Aa.",
      "C": "Aa × aa.",
      "D": "aa × aa."
    },
    "answer": "C",
    "explanation": "Phép lai Aa × aa cho đời con tỉ lệ kiểu hình 1/2 hoa đỏ (Aa) : 1/2 hoa trắng (aa) -> 50% hoa đỏ."
  },
  {
    "id": 42,
    "question": "Xét 2 cặp gen phân li độc lập, alen A quy định hoa đỏ, alen a quy định hoa trắng, alen B quy định quả tròn, alen b quy định quả dài. Cây hoa đỏ, quả dài thuần chủng có kiểu gen nào sau đây?",
    "options": {
      "A": "aabb.",
      "B": "aaBB.",
      "C": "AABB.",
      "D": "AAbb."
    },
    "answer": "D",
    "explanation": "Hoa đỏ thuần chủng: AA; quả dài thuần chủng: bb -> Kiểu gen cây hoa đỏ, quả dài thuần chủng là AAbb."
  },
  {
    "id": 43,
    "question": "Theo lí thuyết, phép lai nào sau đây tạo ra đời con có kiểu gene aa chiếm tỉ lệ 25%?",
    "options": {
      "A": "Aa × Aa.",
      "B": "aa × aa.",
      "C": "AA × Aa.",
      "D": "Aa × aa."
    },
    "answer": "A",
    "explanation": "Aa × Aa -> 1/4 AA : 2/4 Aa : 1/4 aa. Tỉ lệ kiểu gen aa là 1/4 = 25%."
  },
  {
    "id": 44,
    "question": "Biết không xảy ra đột biến gene và đột biến nhiễm sắc thể, cơ thể có kiểu gene nào sau đây khi giảm phân chỉ tạo ra 1 loại giao tử?",
    "options": {
      "A": "aabb.",
      "B": "AaBB.",
      "C": "Aabb.",
      "D": "AaBb."
    },
    "answer": "A",
    "explanation": "Cơ thể đồng hợp tất cả các cặp gen (như aabb) khi giảm phân chỉ tạo ra 1 loại giao tử duy nhất (giao tử ab)."
  },
  {
    "id": 45,
    "question": "Ở người, kiểu tóc do 1 gene gồm 2 allele (A, a) nằm trên NST thường quy định. Một người đàn ông tóc xoăn lấy vợ cũng tóc xoăn, họ sinh lần thứ nhất được 1 con trai tóc xoăn và lần thứ hai được 1 con gái tóc thẳng. Cặp vợ chồng này có kiểu gene là",
    "options": {
      "A": "AA × Aa.",
      "B": "AA × AA.",
      "C": "Aa × Aa.",
      "D": "AA × aa."
    },
    "answer": "C",
    "explanation": "Bố mẹ đều tóc xoăn mà sinh được con gái tóc thẳng (kiểu hình lặn aa) chứng tỏ cả bố và mẹ đều mang allele lặn a -> Bố mẹ đều có kiểu gen dị hợp Aa."
  },
  {
    "id": 46,
    "question": "Cho biết A quy định thân cao trội hoàn toàn so với a quy định thân thấp. Có bao nhiêu kiểu gene khác nhau quy định tính trạng này?",
    "options": {
      "A": "1.",
      "B": "2.",
      "C": "3.",
      "D": "4."
    },
    "answer": "C",
    "explanation": "Một gen có 2 allele (A, a) trên NST thường tạo ra 3 kiểu gen khác nhau: AA, Aa, aa."
  },
  {
    "id": 47,
    "question": "Theo lí thuyết, cơ thể có kiểu gene aaBb giảm phân cho giao tử aB chiếm tỉ lệ bao nhiêu?",
    "options": {
      "A": "1/2.",
      "B": "1/4.",
      "C": "3/4.",
      "D": "1/8."
    },
    "answer": "A",
    "explanation": "Cặp aa cho 100% giao tử a (tỉ lệ 1). Cặp Bb cho 1/2 B : 1/2 b. Tỉ lệ giao tử aB = 1 * 1/2 = 1/2 (50%)."
  },
  {
    "id": 48,
    "question": "Dự đoán kết quả về kiểu hình của phép lai P: AaBb (vàng, trơn) × aabb (xanh, nhăn)",
    "options": {
      "A": "9 vàng, trơn: 3 vàng, nhăn: 3 xanh, trơn: 1 xanh, nhăn.",
      "B": "1 vàng, trơn: 1 vàng, nhăn: 1 xanh, trơn: 1 xanh, nhăn.",
      "C": "3 vàng, trơn: 3 xanh, trơn: 1 vàng, nhăn: 1 xanh, nhăn.",
      "D": "3 vàng, trơn: 3 vàng, nhăn: 1 xanh, trơn: 1 xanh, nhăn."
    },
    "answer": "B",
    "explanation": "Đây là phép lai phân tích cá thể dị hợp 2 cặp gen (AaBb × aabb) -> Đời con cho tỉ lệ phân li kiểu hình là 1 : 1 : 1 : 1 (1 vàng trơn : 1 vàng nhăn : 1 xanh trơn : 1 xanh nhăn)."
  },
  {
    "id": 49,
    "question": "Xét phép lai P: AaBbDd × AaBbDd, tỉ lệ kiểu gene aaBbdd thu được ở thế hệ F1 là",
    "options": {
      "A": "1/32.",
      "B": "1/16.",
      "C": "1/8.",
      "D": "1/4."
    },
    "answer": "A",
    "explanation": "Tách riêng từng cặp:\nAa × Aa -> aa = 1/4\nBb × Bb -> Bb = 2/4 = 1/2\nDd × Dd -> dd = 1/4\nTỉ lệ chung = 1/4 × 1/2 × 1/4 = 1/32."
  },
  {
    "id": 50,
    "question": "Ở cây đậu Hà Lan, allele A (hoa tím) trội hoàn toàn so với a (hoa trắng). Cho cây hoa tím thuần chủng (AA) giao phấn với cây hoa trắng (aa) được F1 (100% Aa, hoa tím). Các cây F1 tự thụ phấn được F2 (1 AA : 2 Aa : 1 aa). Nhận định nào dưới đây KHÔNG chính xác?",
    "options": {
      "A": "Tỉ lệ kiểu hình thu được ở F1 là 100% cây hoa tím.",
      "B": "Kiểu gene của F1 là Aa.",
      "C": "Trên mỗi cây F2 có cả hoa tím và hoa trắng, trong đó hoa tím chiếm tỉ lệ 75%.",
      "D": "Có 2 kiểu gene khác nhau quy định kiểu hình hoa tím, 1 kiểu gene quy định hoa trắng."
    },
    "answer": "C",
    "explanation": "Ở F2, mỗi cây chỉ mang một kiểu gen xác định (cây AA hoặc Aa sẽ cho toàn hoa tím; cây aa sẽ cho toàn hoa trắng). Không thể có hiện tượng trên cùng một cây lại vừa có cả hoa tím vừa có hoa trắng."
  }
]
;