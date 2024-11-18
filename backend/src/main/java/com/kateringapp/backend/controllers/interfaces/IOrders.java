package com.kateringapp.backend.controllers.interfaces;

import com.kateringapp.backend.dtos.OrderDTO;
import com.kateringapp.backend.dtos.criteria.OrderCriteria;

import java.util.List;

public interface IOrders {

    OrderDTO createOrder(OrderDTO orderDTO);
    void deleteOrder(Long id);
    OrderDTO getOrder(Long id);
    List<OrderDTO> getOrders(OrderCriteria orderCriteria);
    OrderDTO updateOrder(Long id, OrderDTO orderDTO);

}