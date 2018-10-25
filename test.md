## application
| 序号  | 名称         | 类型               | 默认值                 | 备注      |
| --- | ---------- | ---------------- | ------------------- | ------- |
| 1   | id         | int(10) unsigned |                     | ID [PK] |
| 2   | code       | varchar(50)      |                     | 代号      |
| 3   | name       | varchar(50)      |                     | 名称      |
| 4   | short_name | varchar(50)      |                     | 简称      |
| 5   | en_name    | varchar(250)     |                     | 英文名称    |
| 6   | secret     | varchar(250)     |                     | 访问密钥    |
| 7   | created_at | datetime         | 1970-01-01 00:00:00 | 记录创建时间  |
| 8   | updated_at | datetime         | 1970-01-01 00:00:00 | 最后更新时间  |
| 9   | comment    | varchar(1000)    |                     | 备注      |

## class_student
| 序号  | 名称              | 类型                   | 默认值                 | 备注                                |
| --- | --------------- | -------------------- | ------------------- | --------------------------------- |
| 1   | id              | bigint(20) unsigned  |                     | ID [PK]                           |
| 2   | user_id         | bigint(20) unsigned  | 0                   | 用户ID [FK|user.id]                 |
| 3   | is_active       | tinyint(1) unsigned  | 0                   | 是否当前活动的, 对于历史数据为否 [Enum|0:否, 1:是] |
| 4   | school_id       | bigint(20) unsigned  | 0                   | 学校ID [FK|school_id]               |
| 5   | grade_id        | bigint(20) unsigned  | 0                   | 当前年级ID [FK|grade.id]              |
| 6   | class_id        | bigint(20) unsigned  | 0                   | 当前班级ID [FK|school_class.id]       |
| 7   | record_class_id | bigint(20) unsigned  | 0                   | 当前历史班级ID [FK|record_class.id]     |
| 8   | number          | smallint(5) unsigned | 0                   | 在班级中的编号                           |
| 9   | seat_number     | smallint(5) unsigned | 0                   | 座位号                               |
| 10  | row_number      | smallint(5) unsigned | 0                   | 座位行号                              |
| 11  | col_number      | smallint(5) unsigned | 0                   | 座位列号                              |
| 12  | code            | varchar(50)          |                     | 学号                                |
| 13  | is_graduated    | tinyint(1) unsigned  | 0                   | 是否毕业 [Enum|0:否, 1:是]              |
| 14  | start_date      | datetime             | 1970-01-01 00:00:00 | 开始日期                              |
| 15  | end_date        | datetime             | 1970-01-01 00:00:00 | 结束日期                              |
| 16  | created_at      | datetime             | 1970-01-01 00:00:00 | 记录创建的时间                           |
| 17  | updated_at      | datetime             | 1970-01-01 00:00:00 | 记录更新的时间                           |
| 18  | comment         | varchar(1000)        |                     | 备注信息                              |

## class_teacher
| 序号  | 名称                | 类型                  | 默认值                 | 备注                                |
| --- | ----------------- | ------------------- | ------------------- | --------------------------------- |
| 1   | id                | bigint(20) unsigned |                     | ID [PK]                           |
| 2   | user_id           | bigint(20) unsigned | 0                   | 用户ID [FK|user.id]                 |
| 3   | is_active         | tinyint(1) unsigned | 0                   | 是否当前活动的, 对于历史数据为否 [Enum|0:否, 1:是] |
| 4   | school_id         | bigint(20) unsigned | 0                   | 学校ID [FK|school_id]               |
| 5   | grade_id          | bigint(20) unsigned | 0                   | 年级ID [FK|grade.id]                |
| 6   | class_id          | bigint(20) unsigned | 0                   | 班级ID [FK|school_class.id]         |
| 7   | record_class_id   | bigint(20) unsigned | 0                   | 历史班级ID [FK|record_class.id]       |
| 8   | subject_id        | bigint(20) unsigned | 0                   | 科目ID [FK|subject.id]              |
| 9   | school_subject_id | bigint(20) unsigned | 0                   | 科目ID [FK|subject.id]              |
| 10  | role_id           | bigint(20) unsigned | 0                   | 角色ID [FK|role.id]                 |
| 11  | role_code         | varchar(50)         |                     | 角色代码 [RF|role.code]               |
| 12  | start_date        | datetime            | 1970-01-01 00:00:00 | 开始日期                              |
| 13  | end_date          | datetime            | 1970-01-01 00:00:00 | 结束日期                              |
| 14  | created_at        | datetime            | 1970-01-01 00:00:00 | 记录创建的时间                           |
| 15  | updated_at        | datetime            | 1970-01-01 00:00:00 | 记录更新的时间                           |
| 16  | comment           | varchar(1000)       |                     | 备注信息                              |

## family_relation
| 序号  | 名称         | 类型                  | 默认值                 | 备注                                         |
| --- | ---------- | ------------------- | ------------------- | ------------------------------------------ |
| 1   | id         | bigint(20) unsigned |                     | ID [PK]                                    |
| 2   | user_id    | bigint(20) unsigned | 0                   | 用户ID [FK|user.id]                          |
| 3   | target_id  | bigint(20) unsigned | 0                   | 目标用户ID, 如target_id是user_id的父亲 [FK|user.id] |
| 4   | type_id    | int(10) unsigned    | 0                   | 家庭关系类型ID [FK|family_relation_type.id]      |
| 5   | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建的时间                                    |
| 6   | updated_at | datetime            | 1970-01-01 00:00:00 | 记录更新的时间                                    |

## family_relation_type
| 序号  | 名称         | 类型               | 默认值                 | 备注      |
| --- | ---------- | ---------------- | ------------------- | ------- |
| 1   | id         | int(10) unsigned |                     | ID [PK] |
| 2   | code       | varchar(100)     |                     | 编号      |
| 3   | name       | varchar(100)     |                     | 名称      |
| 4   | created_at | datetime         | 1970-01-01 00:00:00 | 记录创建的时间 |
| 5   | updated_at | datetime         | 1970-01-01 00:00:00 | 记录更新的时间 |
| 6   | comment    | varchar(1000)    |                     | 备注信息    |

## file_bucket
| 序号  | 名称                | 类型                  | 默认值                 | 备注                                                      |
| --- | ----------------- | ------------------- | ------------------- | ------------------------------------------------------- |
| 1   | id                | int(10) unsigned    |                     | ID [PK]                                                 |
| 2   | acl               | tinyint(1) unsigned | 0                   | 访问控制 [Enum|0:Private, 1:PublicRead, 2:PublicReadWrite]  |
| 3   | name              | varchar(50)         |                     | 名称                                                      |
| 4   | title             | varchar(100)        |                     | 显示名称                                                    |
| 5   | location          | varchar(100)        |                     | 所在数据中心地点                                                |
| 6   | endpoint          | varchar(250)        |                     | 外部终结点                                                   |
| 7   | internal_endpoint | varchar(250)        |                     | 内部终结点                                                   |
| 8   | access_key_id     | varchar(250)        |                     | AccessKeyId                                             |
| 9   | secret_access_key | varchar(250)        |                     | SecretAccessKey(Encrypted)                              |
| 10  | created_at        | datetime            | 1970-01-01 00:00:00 | 记录创建时间                                                  |
| 11  | updated_at        | datetime            | 1970-01-01 00:00:00 | 最后更新时间                                                  |
| 12  | comment           | varchar(1000)       |                     | 备注                                                      |

## grade
| 序号  | 名称             | 类型                  | 默认值                 | 备注                         |
| --- | -------------- | ------------------- | ------------------- | -------------------------- |
| 1   | id             | bigint(20) unsigned |                     | ID [PK]                    |
| 2   | school_type_id | int(10) unsigned    | 0                   | 学校类型ID [FK|school_type.id] |
| 3   | name           | varchar(100)        |                     | 名称                         |
| 4   | level          | tinyint(1) unsigned | 0                   | 级别                         |
| 5   | is_standard    | tinyint(1) unsigned | 0                   | 是否标准 [Enum|0:否, 1:是]       |
| 6   | next_id        | bigint(20) unsigned | 0                   | 下个年级的ID [FK|$self.id]      |
| 7   | created_at     | datetime            | 1970-01-01 00:00:00 | 记录创建的时间                    |
| 8   | updated_at     | datetime            | 1970-01-01 00:00:00 | 记录更新的时间                    |
| 9   | comment        | varchar(1000)       |                     | 备注信息                       |

## record_class
| 序号  | 名称           | 类型                   | 默认值                 | 备注                             |
| --- | ------------ | -------------------- | ------------------- | ------------------------------ |
| 1   | id           | bigint(20) unsigned  |                     | ID [PK]                        |
| 2   | school_id    | bigint(20) unsigned  | 0                   | 学校ID [FK|school_id]            |
| 3   | grade_id     | bigint(20) unsigned  | 0                   | 年级ID [FK|grade.id]             |
| 4   | class_id     | bigint(20) unsigned  | 0                   | 班级ID [FK|school_class.id]      |
| 5   | room_id      | bigint(20) unsigned  | 0                   | 固定教室ID [FK|room.id]            |
| 6   | type         | tinyint(1) unsigned  | 0                   | 班级类型，[Enum|0:行政班, 1:教学班]       |
| 7   | teacher_id   | bigint(20) unsigned  | 0                   | 班主任的用户ID [FK|user.id]          |
| 8   | number       | tinyint(2) unsigned  | 0                   | 班次                             |
| 9   | code         | varchar(50)          |                     | 班级编号                           |
| 10  | name         | varchar(50)          |                     | 名称                             |
| 11  | alias        | varchar(50)          |                     | 班级别名                           |
| 12  | year         | smallint(5) unsigned | 0                   | 年份                             |
| 13  | is_graduated | tinyint(1) unsigned  | 0                   | 是否毕业(毕业班毕业后更新) [Enum|0:否, 1:是] |
| 14  | begin_date   | datetime             | 1970-01-01 00:00:00 | 开始日期                           |
| 15  | end_date     | datetime             | 1970-01-01 00:00:00 | 结束日期                           |
| 16  | created_at   | datetime             | 1970-01-01 00:00:00 | 记录创建的时间                        |
| 17  | updated_at   | datetime             | 1970-01-01 00:00:00 | 记录更新的时间                        |
| 18  | comment      | varchar(1000)        |                     | 备注信息                           |

## region
| 序号  | 名称         | 类型                  | 默认值                 | 备注                   |
| --- | ---------- | ------------------- | ------------------- | -------------------- |
| 1   | id         | int(10) unsigned    |                     | ID [PK]              |
| 2   | parent_id  | int(10) unsigned    | 0                   | 上级区域ID [FK|$self.id] |
| 3   | code       | varchar(100)        |                     | 编号                   |
| 4   | name       | varchar(100)        |                     | 名称                   |
| 5   | level      | tinyint(1) unsigned | 0                   | 行政区域级别               |
| 6   | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建的时间              |
| 7   | updated_at | datetime            | 1970-01-01 00:00:00 | 记录更新的时间              |
| 8   | comment    | varchar(1000)       |                     | 备注信息                 |

## role
| 序号  | 名称         | 类型                  | 默认值                 | 备注                         |
| --- | ---------- | ------------------- | ------------------- | -------------------------- |
| 1   | id         | int(10) unsigned    |                     | ID [PK]                    |
| 2   | status     | tinyint(1) unsigned | 0                   | 状态 [Enum|0:禁用, 1:激活, 2:删除] |
| 3   | weight     | int(10) unsigned    | 0                   | 权重                         |
| 4   | code       | varchar(100)        |                     | 编码                         |
| 5   | name       | varchar(100)        |                     | 名称                         |
| 6   | expired_at | datetime            | 2099-01-01 00:00:00 | 过期时间                       |
| 7   | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建时间                     |
| 8   | updated_at | datetime            | 1970-01-01 00:00:00 | 最后更新时间                     |
| 9   | comment    | varchar(1000)       |                     | 备注                         |

## room
| 序号  | 名称            | 类型                   | 默认值                 | 备注                          |
| --- | ------------- | -------------------- | ------------------- | --------------------------- |
| 1   | id            | bigint(20) unsigned  |                     | ID [PK]                     |
| 2   | school_id     | bigint(20) unsigned  | 0                   | 学校ID [FK|school.id]         |
| 3   | building_id   | bigint(20) unsigned  | 0                   | 所在的建筑ID [FK|building.id]    |
| 4   | type          | tinyint(1) unsigned  | 0                   | 类型 [Enum|0:综合, 1:教室, 2:办公室] |
| 5   | status        | tinyint(1) unsigned  | 0                   | 状态 [Enum|0:禁用, 1:激活, 2:删除]  |
| 6   | floor         | tinyint(2) unsigned  | 0                   | 所在的楼层                       |
| 7   | number        | int(10) unsigned     | 0                   | 编号                          |
| 8   | name          | varchar(100)         |                     | 名称                          |
| 9   | seat_count    | int(10) unsigned     | 0                   | 座位数                         |
| 10  | row_count     | int(10) unsigned     | 0                   | 座位行数                        |
| 11  | column_count  | int(10) unsigned     | 0                   | 座位列数                        |
| 12  | wlan_ssid     | varchar(50)          |                     | WIFI的SSID                   |
| 13  | wlan_password | varchar(50)          |                     | WIFI密码                      |
| 14  | server_ip     | varchar(50)          |                     | 教室工控机IP地址                   |
| 15  | server_port   | smallint(5) unsigned | 0                   | 智慧课堂服务器端口号                  |
| 16  | created_at    | datetime             | 1970-01-01 00:00:00 | 记录创建的时间                     |
| 17  | updated_at    | datetime             | 1970-01-01 00:00:00 | 记录更新的时间                     |
| 18  | comment       | varchar(1000)        |                     | 备注信息                        |

## school
| 序号  | 名称              | 类型                  | 默认值                 | 备注                         |
| --- | --------------- | ------------------- | ------------------- | -------------------------- |
| 1   | id              | bigint(20) unsigned |                     | ID [PK]                    |
| 2   | status          | tinyint(1) unsigned | 0                   | 状态 [Enum|0:禁用, 1:激活, 2:删除] |
| 3   | region_id       | int(10) unsigned    | 0                   | 所在的行政区域Id号                 |
| 4   | name            | varchar(100)        |                     | 名称                         |
| 5   | headmaster_id   | bigint(20) unsigned | 0                   | 校长的用户ID [FK|user.id]       |
| 6   | headmaster_name | varchar(50)         |                     | 校长名字 [RF|user.real_name]   |
| 7   | telephone       | varchar(50)         |                     | 联系电话                       |
| 8   | address         | varchar(250)        |                     | 地址                         |
| 9   | email           | varchar(200)        |                     | 邮箱                         |
| 10  | contact_person  | varchar(50)         |                     | 联系人姓名                      |
| 11  | contact_phone   | varchar(50)         |                     | 联系人电话                      |
| 12  | contact_email   | varchar(200)        |                     | 联系人电子邮箱                    |
| 13  | install_key     | varchar(250)        |                     | 安装密钥，用于设备安装部署              |
| 14  | signature_key   | varchar(250)        |                     | 签名密钥，用于接口通讯的安全认证           |
| 15  | created_at      | datetime            | 1970-01-01 00:00:00 | 记录创建的时间                    |
| 16  | updated_at      | datetime            | 1970-01-01 00:00:00 | 记录更新的时间                    |
| 17  | comment         | varchar(1000)       |                     | 备注信息                       |

## school_class
| 序号  | 名称             | 类型                   | 默认值                 | 备注                         |
| --- | -------------- | -------------------- | ------------------- | -------------------------- |
| 1   | id             | bigint(20) unsigned  |                     | ID [PK]                    |
| 2   | status         | tinyint(1) unsigned  | 0                   | 状态 [Enum|0:禁用, 1:激活, 2:删除] |
| 3   | school_id      | bigint(20) unsigned  | 0                   | 学校ID [FK|school_id]        |
| 4   | grade_id       | bigint(20) unsigned  | 0                   | 标准年级ID [FK|grade.id]       |
| 5   | room_id        | bigint(20) unsigned  | 0                   | 固定教室ID [FK|room.id]        |
| 6   | type           | tinyint(1) unsigned  | 0                   | 班级类型，[Enum|0:行政班, 1:教学班]   |
| 7   | teacher_id     | bigint(20) unsigned  | 0                   | 班主任的用户ID [FK|user.id]      |
| 8   | number         | tinyint(2) unsigned  | 0                   | 班次                         |
| 9   | code           | varchar(50)          |                     | 班级编号                       |
| 10  | name           | varchar(50)          |                     | 名称                         |
| 11  | alias          | varchar(50)          |                     | 班级别名                       |
| 12  | is_graduated   | tinyint(1) unsigned  | 0                   | 是否毕业 [Enum|0:否, 1:是]       |
| 13  | begin_date     | datetime             | 1970-01-01 00:00:00 | 开班日期                       |
| 14  | graduated_date | datetime             | 1970-01-01 00:00:00 | 毕业日期                       |
| 15  | begin_year     | smallint(5) unsigned | 0                   | 开班年份(级)                    |
| 16  | graduated_year | smallint(5) unsigned | 0                   | 毕业年份(届)                    |
| 17  | created_at     | datetime             | 1970-01-01 00:00:00 | 记录创建的时间                    |
| 18  | updated_at     | datetime             | 1970-01-01 00:00:00 | 记录更新的时间                    |
| 19  | comment        | varchar(1000)        |                     | 备注信息                       |

## school_semester
| 序号  | 名称             | 类型                   | 默认值                 | 备注                         |
| --- | -------------- | -------------------- | ------------------- | -------------------------- |
| 1   | id             | bigint(20) unsigned  |                     | ID [PK]                    |
| 2   | school_id      | bigint(20) unsigned  | 0                   | 学校ID号 [FK|school.id]       |
| 3   | school_type_id | int(10) unsigned     | 0                   | 学校类型ID [FK|school_type.id] |
| 4   | year           | smallint(5) unsigned | 0                   | 年份                         |
| 5   | number         | tinyint(1) unsigned  | 0                   | 学期序号,在一个学年中的第几个学期          |
| 6   | start_date     | datetime             | 1970-01-01 00:00:00 | 学期开始日期(包括当天)               |
| 7   | end_date       | datetime             | 1970-01-01 00:00:00 | 学期结束日期(包括当天)               |
| 8   | created_at     | datetime             | 1970-01-01 00:00:00 | 记录创建的时间                    |
| 9   | updated_at     | datetime             | 1970-01-01 00:00:00 | 记录更新的时间                    |
| 10  | comment        | varchar(1000)        |                     | 备注信息                       |

## school_subject
| 序号  | 名称         | 类型                  | 默认值                 | 备注                         |
| --- | ---------- | ------------------- | ------------------- | -------------------------- |
| 1   | id         | bigint(20) unsigned |                     | ID [PK]                    |
| 2   | school_id  | bigint(20) unsigned | 0                   | 学校ID [FK|school.id]        |
| 3   | subject_id | bigint(20) unsigned | 0                   | 科目ID [FK|subject.id]       |
| 4   | name       | varchar(100)        |                     | 名称                         |
| 5   | alias      | varchar(100)        |                     | 别名                         |
| 6   | status     | tinyint(1) unsigned | 0                   | 状态 [Enum|0:禁用, 1:激活, 2:删除] |
| 7   | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建的时间                    |
| 8   | updated_at | datetime            | 1970-01-01 00:00:00 | 记录更新的时间                    |
| 9   | comment    | varchar(1000)       |                     | 备注信息                       |

## school_type
| 序号  | 名称          | 类型                  | 默认值                 | 备注                   |
| --- | ----------- | ------------------- | ------------------- | -------------------- |
| 1   | id          | int(10) unsigned    |                     | ID [PK]              |
| 2   | code        | varchar(100)        |                     | 编号                   |
| 3   | name        | varchar(100)        |                     | 名称                   |
| 4   | is_standard | tinyint(1) unsigned | 0                   | 是否标准 [Enum|0:否, 1:是] |
| 5   | created_at  | datetime            | 1970-01-01 00:00:00 | 记录创建的时间              |
| 6   | updated_at  | datetime            | 1970-01-01 00:00:00 | 记录更新的时间              |
| 7   | comment     | varchar(1000)       |                     | 备注信息                 |

## school_type_mapping
| 序号  | 名称         | 类型                  | 默认值                 | 备注                         |
| --- | ---------- | ------------------- | ------------------- | -------------------------- |
| 1   | id         | bigint(20) unsigned |                     | ID [PK]                    |
| 2   | school_id  | bigint(20) unsigned | 0                   | 学校ID [FK|school.id]        |
| 3   | type_id    | int(10) unsigned    | 0                   | 学校类型ID [FK|school_type.id] |
| 4   | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建的时间                    |
| 5   | updated_at | datetime            | 1970-01-01 00:00:00 | 记录更新的时间                    |

## sts_file_upload_log
| 序号  | 名称         | 类型                  | 默认值                 | 备注                                  |
| --- | ---------- | ------------------- | ------------------- | ----------------------------------- |
| 1   | id         | bigint(20) unsigned |                     | ID [PK]                             |
| 2   | school_id  | bigint(20) unsigned | 0                   | 学校ID [FK|school.id]                 |
| 3   | topic_id   | int(10) unsigned    | 0                   | 数据包类型ID [FK|sts_topic.id]           |
| 4   | bucket_id  | int(10) unsigned    | 0                   | 文件存储区ID [FK|file_bucket.id]         |
| 5   | size       | int(10) unsigned    | 0                   | 文件字节数                               |
| 6   | uuid       | char(32)            |                     | 数据包UUID                             |
| 7   | md5        | char(32)            |                     | 文件的MD5-Hash值                        |
| 8   | recipient  | varchar(50)         |                     | 数据接收方(如:cjyun, cjhms, cjcms, cjcbs) |
| 9   | topic      | varchar(100)        |                     | 数据包类型                               |
| 10  | bucket     | varchar(100)        |                     | BucketName                          |
| 11  | path       | varchar(500)        |                     | ObjectKey                           |
| 12  | etag       | varchar(50)         |                     | ETag                                |
| 13  | extension  | varchar(50)         |                     | 文件扩展名                               |
| 14  | mime_type  | varchar(100)        |                     | MIME-Type                           |
| 15  | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建时间                              |
| 16  | updated_at | datetime            | 1970-01-01 00:00:00 | 最后更新时间                              |
| 17  | extra      | varchar(2000)       |                     | 额外信息                                |
| 18  | comment    | varchar(1000)       |                     | 备注                                  |

## sts_topic
| 序号  | 名称             | 类型                  | 默认值                 | 备注                   |
| --- | -------------- | ------------------- | ------------------- | -------------------- |
| 1   | id             | int(10) unsigned    |                     | ID [PK]              |
| 2   | direction      | tinyint(1) unsigned | 0                   | 传输方向 [Enum|0:上, 1:下] |
| 3   | name           | varchar(100)        |                     | 名称                   |
| 4   | title          | varchar(100)        |                     | 显示名称                 |
| 5   | recipient      | varchar(50)         |                     | 默认接收数据的应用            |
| 6   | mq_exchange    | varchar(100)        |                     | 默认MQ-Exchange        |
| 7   | mq_routing_key | varchar(200)        |                     | 默认MQ-RoutingKey      |
| 8   | bucket         | varchar(50)         |                     | 默认文件存储区              |
| 9   | path_format    | varchar(500)        |                     | 默认文件存储路径格式           |
| 10  | created_at     | datetime            | 1970-01-01 00:00:00 | 记录创建时间               |
| 11  | updated_at     | datetime            | 1970-01-01 00:00:00 | 最后更新时间               |
| 12  | comment        | varchar(1000)       |                     | 备注                   |

## subject
| 序号  | 名称          | 类型                  | 默认值                 | 备注                   |
| --- | ----------- | ------------------- | ------------------- | -------------------- |
| 1   | id          | bigint(20) unsigned |                     | ID [PK]              |
| 2   | code        | varchar(100)        |                     | 编号                   |
| 3   | name        | varchar(100)        |                     | 名称                   |
| 4   | icon        | varchar(100)        |                     | 图标                   |
| 5   | is_standard | tinyint(1) unsigned | 0                   | 是否标准 [Enum|0:否, 1:是] |
| 6   | created_at  | datetime            | 1970-01-01 00:00:00 | 记录创建的时间              |
| 7   | updated_at  | datetime            | 1970-01-01 00:00:00 | 记录更新的时间              |
| 8   | comment     | varchar(1000)       |                     | 备注信息                 |

## sys_sequence
| 序号  | 名称          | 类型               | 默认值                 | 备注                   |
| --- | ----------- | ---------------- | ------------------- | -------------------- |
| 1   | id          | varchar(100)     |                     | ID [PK]              |
| 2   | value       | int(10) unsigned | 0                   | 当前值                  |
| 3   | step        | int(10) unsigned | 1                   | 递增值                  |
| 4   | row_version | int(10) unsigned | 0                   | 记录行的版本号 [RowVersion] |
| 5   | created_at  | datetime         | 1970-01-01 00:00:00 | 记录创建的时间              |
| 6   | updated_at  | datetime         | 1970-01-01 00:00:00 | 记录更新的时间              |
| 7   | comment     | varchar(1000)    |                     | 备注                   |

## textbook
| 序号  | 名称         | 类型                  | 默认值                 | 备注                   |
| --- | ---------- | ------------------- | ------------------- | -------------------- |
| 1   | id         | bigint(20) unsigned |                     | ID [PK]              |
| 2   | subject_id | bigint(20) unsigned | 0                   | 科目ID [FK|subject.id] |
| 3   | code       | varchar(100)        |                     | 编号                   |
| 4   | title      | varchar(100)        |                     | 标题                   |
| 5   | edition    | varchar(100)        |                     | 版本                   |
| 6   | publisher  | varchar(100)        |                     | 出版社                  |
| 7   | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建的时间              |
| 8   | updated_at | datetime            | 1970-01-01 00:00:00 | 记录更新的时间              |
| 9   | comment    | varchar(1000)       |                     | 备注信息                 |

## third_party_app
| 序号  | 名称         | 类型               | 默认值                 | 备注                                     |
| --- | ---------- | ---------------- | ------------------- | -------------------------------------- |
| 1   | id         | int(10) unsigned |                     | ID [PK]                                |
| 2   | code       | varchar(50)      |                     | 唯一编码                                   |
| 3   | name       | varchar(50)      |                     | 应用名称                                   |
| 4   | auth_type  | varchar(50)      |                     | 身份认证类型, 如oauth                         |
| 5   | provider   | varchar(50)      |                     | 身份认证提供方，如微信                            |
| 6   | client_id  | varchar(200)     |                     | 提供方分配的客户ID，在微信公众号中是app_id，相当于使用接口的账号   |
| 7   | secret     | varchar(250)     |                     | 提供方分配的密钥，在微信公众号中是app_secret，相当于使用接口的密码 |
| 8   | created_at | datetime         | 1970-01-01 00:00:00 | 记录创建的时间                                |
| 9   | updated_at | datetime         | 1970-01-01 00:00:00 | 记录更新的时间                                |
| 10  | comment    | varchar(1000)    |                     | 备注信息                                   |

## third_party_user
| 序号  | 名称                    | 类型                  | 默认值                 | 备注                           |
| --- | --------------------- | ------------------- | ------------------- | ---------------------------- |
| 1   | id                    | bigint(20) unsigned |                     | ID [PK]                      |
| 2   | app_id                | int(10) unsigned    | 0                   | 应用ID [FK|third_party_app.id] |
| 3   | user_id               | bigint(20) unsigned | 0                   | 用户ID [FK|user.id]            |
| 4   | external_id           | varchar(200)        |                     | 第三方应用中的用户ID，在微信公众号中是open_id  |
| 5   | refresh_token         | varchar(200)        |                     | 刷新用的Token                    |
| 6   | refresh_token_expires | datetime            | 1970-01-01 00:00:00 | 刷新用Token的过期时间                |
| 7   | access_token          | varchar(200)        |                     | 访问第三方系统接口的Token              |
| 8   | access_token_expires  | datetime            | 1970-01-01 00:00:00 | 刷新用Token的过期时间                |
| 9   | last_login            | datetime            | 1970-01-01 00:00:00 | 最后登录的时间                      |
| 10  | row_version           | int(10) unsigned    | 0                   | 记录行的版本号 [RowVersion]         |
| 11  | created_at            | datetime            | 1970-01-01 00:00:00 | 记录创建的时间                      |
| 12  | updated_at            | datetime            | 1970-01-01 00:00:00 | 记录更新的时间                      |
| 13  | comment               | varchar(1000)       |                     | 备注信息                         |

## user
| 序号  | 名称              | 类型                  | 默认值                 | 备注                                       |
| --- | --------------- | ------------------- | ------------------- | ---------------------------------------- |
| 1   | id              | bigint(20) unsigned |                     | ID [PK]                                  |
| 2   | type            | tinyint(1) unsigned | 0                   | 用户类型 [Enum|1:普通用户, 2:管理员]                |
| 3   | status          | tinyint(1) unsigned | 0                   | 用户状态 [Enum|0:禁用, 1:激活, 2:删除]             |
| 4   | user_name       | varchar(100)        |                     | 用户名(登录账号)                                |
| 5   | nick_name       | varchar(50)         |                     | 昵称, 显示名称                                 |
| 6   | real_name       | varchar(50)         |                     | 真实姓名                                     |
| 7   | current_role    | varchar(50)         |                     | 当前角色代码                                   |
| 8   | password_type   | varchar(50)         | plain               | 密码类型 [Enum:String|plain, md5, hmac_sha1] |
| 9   | password_salt   | varchar(100)        |                     | 密码的HashKey                               |
| 10  | password        | varchar(250)        |                     | 密码                                       |
| 11  | last_login      | datetime            | 1970-01-01 00:00:00 | 最后登录的时间                                  |
| 12  | gender          | tinyint(1) unsigned | 0                   | 性别 [Enum|0:保密, 1:男, 2:女]                 |
| 13  | idcard          | varchar(50)         |                     | 身份证号码                                    |
| 14  | mobile          | varchar(50)         |                     | 手机号码                                     |
| 15  | email           | varchar(200)        |                     | 邮箱号码                                     |
| 16  | idcard_verified | tinyint(1) unsigned | 0                   | 是否已验证实名 [Enum|0:否, 1:是]                  |
| 17  | mobile_verified | tinyint(1) unsigned | 0                   | 是否已验证手机 [Enum|0:否, 1:是]                  |
| 18  | email_verified  | tinyint(1) unsigned | 0                   | 是否已验证邮箱 [Enum|0:否, 1:是]                  |
| 19  | birth_date      | date                | 1970-01-01          | 出生日期                                     |
| 20  | device_mac      | varchar(50)         |                     | 分配设备的MAC地址                               |
| 21  | qq              | varchar(20)         |                     | QQ号码                                     |
| 22  | wechat          | varchar(50)         |                     | 微信号                                      |
| 23  | home_address    | varchar(250)        |                     | 家庭住址                                     |
| 24  | avatar_url      | varchar(250)        |                     | 头像URL                                    |
| 25  | row_version     | int(10) unsigned    | 0                   | 记录行的版本号 [RowVersion]                     |
| 26  | created_at      | datetime            | 1970-01-01 00:00:00 | 记录创建时间                                   |
| 27  | updated_at      | datetime            | 1970-01-01 00:00:00 | 最后更新时间                                   |
| 28  | comment         | varchar(1000)       |                     | 备注                                       |

## user_role
| 序号  | 名称         | 类型                  | 默认值                 | 备注                |
| --- | ---------- | ------------------- | ------------------- | ----------------- |
| 1   | id         | bigint(20) unsigned |                     | ID [PK]           |
| 2   | user_id    | bigint(20) unsigned | 0                   | 用户ID [FK|user.id] |
| 3   | role_id    | int(10) unsigned    | 0                   | 角色ID [FK|role.id] |
| 4   | expired_at | datetime            | 2099-01-01 00:00:00 | 过期时间              |
| 5   | created_at | datetime            | 1970-01-01 00:00:00 | 记录创建时间            |
| 6   | updated_at | datetime            | 1970-01-01 00:00:00 | 最后更新时间            |

