import EntityBase from "../EntityBase";

export default class User extends EntityBase {
  getContent(type = "", page_size = 0, page_number = 0, title = "") {
    if (title == "") {
      return this.request
        .post("Content/GetPage/" + type)
        .addJson({
          pageSize: page_size,
          pageNumber: page_number
        })

        .run();
    } else {
      return this.request
        .post("Content/GetPage/" + type)
        .addJson({
          baseOperator: "OR",
          filterParams: [
            {
              key: "Title",
              value: title
            },
            {
              key: "Content1",
              value: title
            }
          ],
          pageSize: page_size,
          pageNumber: page_number
        })

        .run();
    }
  }
  createContentWithHtml(
    title = "",
    group_id = 0,
    special_news = false,
    content = "",
    responsible = "",
    main_file_id = 0,
    tags = [],
    brief = ""
  ) {
    return this.request
      .post("Content/Post/")
      .addJson({
        title: title,
        group: { id: group_id },
        specialNews: special_news,
        content1: content,
        responsible: responsible,
        mainFile: { id: main_file_id },
        tags: tags,
        brief: brief,
        IsHtml: true
      })

      .run();
  }
  createContentWithTemplate(
    title = "",
    group_id = 0,
    content_1 = "",
    content_2 = "",
    special_text = "",
    responsible = "",
    main_file_id = 0,
    tags = [],
    description = "",
    image_list = [],
    more_info_url = ""
  ) {
    return this.request
      .post("Content/Post/")
      .addJson({
        title: title,
        group: { id: group_id },
        content1: content_1,
        content2: content_2,
        SpecialText: special_text,
        responsible: responsible,
        mainFile: { id: main_file_id },
        tags: tags,
        imageList: image_list,
        description: description,
        moreInfoUrl: more_info_url,
        isHtml: false
      })

      .run();
  }
  updateContentWithHtml(
    id = 0,
    title = "",
    group_id = 0,
    special_news = false,
    content = "",
    responsible = "",
    main_file_id = 0,
    tags = [],
    brief = ""
  ) {
    return this.request
      .put("Content")
      .addJson({
        id: id,
        title: title,
        group: { id: group_id },
        specialNews: special_news,
        content1: content,
        responsible: responsible,
        mainFile: { id: main_file_id },
        tags: tags,
        brief: brief,
        IsHtml: true
      })

      .run();
  }
  updateContentWithTemplate(
    id = 0,
    title = "",
    group_id = 0,
    content_1 = "",
    content_2 = "",
    special_text = "",
    responsible = "",
    main_file_id = 0,
    tags = [],
    description = "",
    image_list = [],
    more_info_url = ""
  ) {
    return this.request
      .put("Content")
      .addJson({
        id: id,
        title: title,
        group: { id: group_id },
        content1: content_1,
        content2: content_2,
        SpecialText: special_text,
        responsible: responsible,
        mainFile: { id: main_file_id },
        tags: tags,
        imageList: image_list,
        description: description,
        moreInfoUrl: more_info_url,
        isHtml: false
      })

      .run();
  }
  getContentDetail(id) {
    return this.request
      .get("Content/" + id)

      .run();
  }
  updateStateContent(id, status) {
    return this.request
      .put("Content/" + id + "{status}?")
      .addParam("currentStatus", status)

      .run();
  }
  getTags(title) {
    return this.request
      .get("Tag/" + title + "/")

      .run();
  }
  getContentGroup(type) {
    return this.request
      .get("ContentGroup/GetAllByGroupType" + type)

      .run();
  }
}
