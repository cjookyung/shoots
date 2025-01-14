package com.Shoots.mybatis.mapper;

import com.Shoots.domain.InquiryComment;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface InquiryCommentMapper {
    public int getListCount(int inquiry_idx);
    public List<InquiryComment> getInquiryCommentList(HashMap<String, Object> map);

}
