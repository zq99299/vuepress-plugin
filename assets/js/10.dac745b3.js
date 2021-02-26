(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-的存储引擎（本章是测试导航栏的页面）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-的存储引擎（本章是测试导航栏的页面）"}},[s._v("#")]),s._v(" MySQL 的存储引擎（本章是测试导航栏的页面）")]),s._v(" "),t("p",[s._v("本节只是概要的描述 MySQL 的存储引擎，不会涉及太多的细节，因为存储引擎的讨论及其相关特性将会贯穿全书。本节知识也不是完全指南，如果有需要，则有必要去阅读对应存储引擎的官方文档。")]),s._v(" "),t("p",[s._v("在文件系统中，MySQL 将每个数据库（也称为 schema）保存为数据目录下的一个子目录。创建表时，MySQL 会在目录下创建一个和表同名的 "),t("code",[s._v(".frm")]),s._v(" 文件保存表的定义。表定义是在 MySQL 服务层统一处理的，大小写敏感问题和具体的系统平台有关系（windows 不敏感），保存数据和索引的方式则是各个存储引擎实现的。")]),s._v(" "),t("p",[s._v("可以使用以下语句显示表的相关信息，例如，查看 mysql 数据库中的 user 表：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 在 5.0 以后的版本中，也可以查询 INFORMATION_SCHEMA 中对应的表")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),s._v(" \\G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n           Name: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Engine")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v("\n        Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n     Row_format: Dynamic\n           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Rows")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n Avg_row_length: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2730")]),s._v("\n    Data_length: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v("\nMax_data_length: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n   Index_length: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      Data_free: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4194304")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Auto_increment")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n    Create_time: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v("\n    Update_time: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n     Check_time: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n      Collation: utf8_bin\n       Checksum: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n Create_options: stats_persistent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Comment")]),s._v(": Users "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("注意：笔者这里使用的是 MySQL8.0")]),s._v(" "),t("p",[s._v("上述是一个 InnoDB 的表，各项字段含义如下：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Name：表名")])]),s._v(" "),t("li",[t("p",[s._v("Engine：存储引擎类型，在旧版本中，该列为 Type")])]),s._v(" "),t("li",[t("p",[s._v("Row_format：行的格式")]),s._v(" "),t("p",[s._v("对于 MyISAM 表，可选值为")]),s._v(" "),t("ul",[t("li",[s._v("Dynamic：动态，行长度是可变的，一般包含可变长度的字段，如 VARCHAR、BLOB")]),s._v(" "),t("li",[s._v("Fixed ：固定，行长度是固定的，只包含固定长度的列，如 CHAR、INTEGER")]),s._v(" "),t("li",[s._v("Compressed：行只在压缩表中存在，该部分可参考 MyISAM 压缩表一节")])])]),s._v(" "),t("li",[t("p",[s._v("Rows：表中的行数，在 InnoDB 中，该值是一个估计值")])]),s._v(" "),t("li",[t("p",[s._v("Avg_row_length：平均每行包含的字节数")])]),s._v(" "),t("li",[t("p",[s._v("Data_length：表数据的大小（字节）")])]),s._v(" "),t("li",[t("p",[s._v("Max_data_length：表数据的最大容量，该值和存储引擎有关")])]),s._v(" "),t("li",[t("p",[s._v("Index_length：索引的大小（字节）")])]),s._v(" "),t("li",[t("p",[s._v("Data_free：")]),s._v(" "),t("p",[s._v("对于 MyISAM 表，表示已分配但目前没有使用的空间。包含了之前删除的行，以及后续可以被 INSERT 利用到的空间")])]),s._v(" "),t("li",[t("p",[s._v("Auto_increment：下一个 AUTO_INCREMENT 的值")])]),s._v(" "),t("li",[t("p",[s._v("Create_time：表创建信息")])]),s._v(" "),t("li",[t("p",[s._v("Update_time：表数据的最后修改时间")])]),s._v(" "),t("li",[t("p",[s._v("Check_time：使用 CKECK TABLE 命令或则 myisamchk 工具最后一次检查表的时间")])]),s._v(" "),t("li",[t("p",[s._v("Collation：表示默认字符集和字符列排序规则")])]),s._v(" "),t("li",[t("p",[s._v("Checksum：如果启用，保存的是整个表的实时校验和")])]),s._v(" "),t("li",[t("p",[s._v("Create_options：创建表时指定的其他选项")])]),s._v(" "),t("li",[t("p",[s._v("Comment：该列包含了一些其他的额外信息。")]),s._v(" "),t("ul",[t("li",[s._v("对于 MyISAM 表，保存的是表在创建时带的注释。")]),s._v(" "),t("li",[s._v("对于 InnoDB 表，保存的是 InnoDB 表空间的剩余空间信息。")])]),s._v(" "),t("p",[s._v("如果是一个视图，则该列包含 “VIEW” 的文本字样")])])]),s._v(" "),t("h2",{attrs:{id:"innodb-存储引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-存储引擎"}},[s._v("#")]),s._v(" InnoDB 存储引擎")]),s._v(" "),t("p",[s._v("InnoDB 是 MySQL 的默认事务型处理引擎，最重要，使用最广泛的存储引擎。被设计用来处理大量的 "),t("em",[s._v("短期（short-lived")]),s._v("）事务，短期事务大部分情况下是正常提交的，很少会被回滚。")]),s._v(" "),t("p",[s._v("InnoDB 的性能和自动崩溃恢复特性，使得它在非事务型存储的需求中也很流行。")]),s._v(" "),t("p",[s._v("总之来说，对于使用和学习都应该优先选择 InnoDB，这是收益最大的。除非有特别的原因。")]),s._v(" "),t("h3",{attrs:{id:"innodb-的历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-的历史"}},[s._v("#")]),s._v(" InnoDB 的历史")]),s._v(" "),t("p",[s._v("他的历史很复杂，了解下这段历史对于理解 InnoDB很有帮助。")]),s._v(" "),t("p",[s._v("2008年，Oracle 发布了下一代 InnoDB 引擎， InnoDB plugin，适用于 MySQL 5.1 版本，拥有者是 InnoDB，而不是 MySQL。这基于很多原因，mysql 并没有默认集成该引擎，而是集成了旧版本的 InnoDB 引擎，而用户可以选择使用 InnoDB plugin 来覆盖掉旧的版本，直到 Oracle 收购了 Sun 公司后发布的 MySQL 5.5 中才彻底使用 InnoDB plugin 替代了旧版本的 InnoDB（意味 InnoDB plugin 已经是原生编译了，而不是一个插件，但名字已经约定成俗，很难修改了）")]),s._v(" "),t("p",[s._v("这个现代的 InnoDB 版本（MySQL 5.1）中的 InnoDB plugin，支持一些新特性，例如：")]),s._v(" "),t("ul",[t("li",[s._v("利用排序创建索引（building index by sorting）")]),s._v(" "),t("li",[s._v("删除或增加索引时不需要复制全表数据")]),s._v(" "),t("li",[s._v("新的支持压缩的存储格式")]),s._v(" "),t("li",[s._v("新的大型列值如 BLOB 的存储方式")]),s._v(" "),t("li",[s._v("文件格式管理等")])]),s._v(" "),t("p",[s._v("InnoDB 是一个很重要的存储引擎，很多个人和公司都对其贡献代码，而不仅仅是 Oracle 公司的开发团队。一些重要的贡献值包括 Google、Facebook 等，他们的一些改进被直接移植到官方版本，也有一些有 InnoDB 团队重新实现。在过去的几年间，InnoDB 的改进速度大大加快，主要的改进集中在可测量性、可扩展性、可配置化、性能、各种新特性和对 windows 的支持等方面。")]),s._v(" "),t("p",[s._v("为改善 InnoDB 的性能，Oracle 投入了大量的资源，并有很多卓有成效的工作，比如现在可以很好支持 24 核的系统，在某些场景下，32 核或更多核的系统中表现良好")]),s._v(" "),t("h3",{attrs:{id:"innodb-概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-概览"}},[s._v("#")]),s._v(" InnoDB 概览")]),s._v(" "),t("p",[s._v("InnoDB 的数据存储在 **表空间（tablespace）**中，表空间由一系列的数据文件组成（InnoDB 管理的一个黑盒子）。在 MySQL 4.1 以后，可以将 "),t("strong",[s._v("每个表的数据和索引放在单独的文件中")]),s._v(" 。")]),s._v(" "),t("p",[s._v("InnoDB 采用 MVCC 来支持高并发，并且实现了 4 个标准的隔离级别。默认级别为 REPEATABLE READ（可重复读），并且通过 "),t("strong",[s._v("间歇锁（next-key locking）")]),s._v(" 策略防止幻读的出现，使得 InnoDB 不仅仅锁定查询涉及的行，还会对索引中的间歇进行锁定，以防止幻影行的插入。")]),s._v(" "),t("p",[s._v("InnoDB 表是基于 "),t("strong",[s._v("聚簇索引")]),s._v(" 建立的（稍后章节讨论）。索引结构和 MySQL 的其他存储引擎有很的大不同，聚簇索引对主键查询有很高的性能。不过它的 **二级索引（secondary index，非主键索引）**中必须包含主键列，所以 "),t("strong",[s._v("如果主键列很大的话，其他的所有索引都会很大")]),s._v("。InnoDB 的存储格式是平台独立的，也就是说数据和索引文件可以直接跨平台使用。")]),s._v(" "),t("p",[s._v("InnoDB 内部做了很多优化，包括")]),s._v(" "),t("ul",[t("li",[s._v("从磁盘读取数据时采用的可预测性预读，")]),s._v(" "),t("li",[s._v("能够自动在内存中创建 hash 索引以加速读取操作的自适应哈希索引（adaptive hash index），")]),s._v(" "),t("li",[s._v("以及能够加速插入操作的插入缓冲区（insert buffer）等。")])]),s._v(" "),t("p",[s._v("这部分知识后续详细讨论。")]),s._v(" "),t("p",[s._v("InnoDB 的行为是非常复杂的，强烈建议阅读官方手册中「InnoDB 事物模型和锁」一节。了解 MVCC 架构架构带来的一些微秒和细节之处是非常有必要的。存储引擎要为所有用户甚至包括修改数据的用户维持一致性的视图，是非常复杂的工作。")]),s._v(" "),t("p",[s._v("InnoDB 通过一些机制和工具支持真正的热备份，如：")]),s._v(" "),t("ul",[t("li",[s._v("MySQL Enterprise Backup：Oracle 提供")]),s._v(" "),t("li",[s._v("XtraBackup：percona 开源的")])]),s._v(" "),t("p",[s._v("其他的存储引擎不支持热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合的场景中，停止写入可能也意味着停止读")]),s._v(" "),t("h2",{attrs:{id:"myisam-存储引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-存储引擎"}},[s._v("#")]),s._v(" MyISAM 存储引擎")]),s._v(" "),t("p",[s._v("MySQL 5.1 之前是默认的存储引擎。提供了大量的特性，包括全文索引、压缩、空间函数（GIS）等。但是它不支持事物和行级锁，而且还有一个缺陷是崩溃后无法安全恢复。但是它还是有价值的，在对于只读数据、或表较小、可以忍受修复（repair）操作，则可以使用它")]),s._v(" "),t("h3",{attrs:{id:"存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[s._v("#")]),s._v(" 存储")]),s._v(" "),t("p",[s._v("MyISAM 将表存储在两个文件中：")]),s._v(" "),t("ul",[t("li",[s._v("数据文件："),t("code",[s._v(".MYD")])]),s._v(" "),t("li",[s._v("索引文件："),t("code",[s._v(".MYI")])])]),s._v(" "),t("p",[s._v("表可以包含动态或静态（长度固定）行，根据表的定义来决定采用哪种行格式，表可以存储的行记录数据，一般受限于可用的磁盘空间，或则操作系统中单个文件的最大尺寸")]),s._v(" "),t("p",[s._v("在 MySQL 5.0 中，MyISAM 表如果是变长行，则默认配置只能处理 256TB 的数据，因为指向数据记录的指针长度是 6 个字节。早期版本指针长度是 4 个字节，只能处理 4GB 的数据。而所有的 MySQL 版本都支持 8 字节的指针。可通过修改表的 "),t("code",[s._v("MAX_ROWS")]),s._v(" 和 "),t("code",[s._v("AVG_ROW_LENGTH")]),s._v(" 选项的值来修改 MyISAM 的表指针的长度，两者相乘就是表可能达到的最大大小。"),t("strong",[s._v("修改这两个参数会导致重建整个表和表的所有索引")])]),s._v(" "),t("h3",{attrs:{id:"myisam-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发"}},[s._v("#")]),s._v(" 加锁与并发")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h3",{attrs:{id:"myisam-特性-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性-2"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发-2"}},[s._v("#")]),s._v(" 加锁与并发")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发-2"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h3",{attrs:{id:"myisam-特性-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性-3"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发-3"}},[s._v("#")]),s._v(" 加锁与并发")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发-3"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h3",{attrs:{id:"myisam-特性-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性-4"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发-4"}},[s._v("#")]),s._v(" 加锁与并发")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发-4"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h3",{attrs:{id:"myisam-特性-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性-5"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发-5"}},[s._v("#")]),s._v(" 加锁与并发")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发-5"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h3",{attrs:{id:"myisam-特性-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性-6"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发-6"}},[s._v("#")]),s._v(" 加锁与并发")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发-6"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h3",{attrs:{id:"myisam-特性-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性-7"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发-7"}},[s._v("#")]),s._v(" 加锁与并发")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发-7"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h3",{attrs:{id:"myisam-特性-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-特性-8"}},[s._v("#")]),s._v(" MyISAM 特性")]),s._v(" "),t("p",[s._v("作为最早的存储引擎之一，有一些已经开发出来很久的特性，可以满足用户的实际需求")]),s._v(" "),t("h4",{attrs:{id:"加锁与并发-但是在表有读取查询的同时，也可以往表中插入新的记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加锁与并发-但是在表有读取查询的同时，也可以往表中插入新的记录"}},[s._v("#")]),s._v(" 加锁与并发,但是在表有读取查询的同时，也可以往表中插入新的记录")]),s._v(" "),t("p",[t("strong",[s._v("对整张表加锁")]),s._v("，而不是针对行。读取时会对需要读到的所有表加共享锁，写入时则对表加排他锁。")]),s._v(" "),t("p",[s._v("但是在表有读取查询的同时，也可以往表中插入新的记录（这被称为并发插入，CONCURRENT INSERT）")]),s._v(" "),t("h4",{attrs:{id:"修复并发-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复并发-8"}},[s._v("#")]),s._v(" 修复并发")]),s._v(" "),t("h2",{attrs:{id:"innodb-存储引擎-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-存储引擎-2"}},[s._v("#")]),s._v(" InnoDB 存储引擎")]),s._v(" "),t("p",[s._v("InnoDB 是 MySQL 的默认事务型处理引擎，最重要，使用最广泛的存储引擎。被设计用来处理大量的 "),t("em",[s._v("短期（short-lived")]),s._v("）事务，短期事务大部分情况下是正常提交的，很少会被回滚。")]),s._v(" "),t("p",[s._v("InnoDB 的性能和自动崩溃恢复特性，使得它在非事务型存储的需求中也很流行。")]),s._v(" "),t("p",[s._v("总之来说，对于使用和学习都应该优先选择 InnoDB，这是收益最大的。除非有特别的原因。")]),s._v(" "),t("h3",{attrs:{id:"innodb-的历史-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-的历史-2"}},[s._v("#")]),s._v(" InnoDB 的历史")]),s._v(" "),t("h2",{attrs:{id:"innodb-存储引擎-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-存储引擎-3"}},[s._v("#")]),s._v(" InnoDB 存储引擎")]),s._v(" "),t("p",[s._v("InnoDB 是 MySQL 的默认事务型处理引擎，最重要，使用最广泛的存储引擎。被设计用来处理大量的 "),t("em",[s._v("短期（short-lived")]),s._v("）事务，短期事务大部分情况下是正常提交的，很少会被回滚。")]),s._v(" "),t("p",[s._v("InnoDB 的性能和自动崩溃恢复特性，使得它在非事务型存储的需求中也很流行。")]),s._v(" "),t("p",[s._v("总之来说，对于使用和学习都应该优先选择 InnoDB，这是收益最大的。除非有特别的原因。")]),s._v(" "),t("h3",{attrs:{id:"innodb-的历史-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-的历史-3"}},[s._v("#")]),s._v(" InnoDB 的历史")])])}),[],!1,null,null,null);a.default=e.exports}}]);