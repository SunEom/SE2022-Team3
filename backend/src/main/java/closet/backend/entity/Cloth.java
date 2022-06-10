package closet.backend.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Builder
@Getter
public class Cloth extends BaseEntity{
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int cloth_id;

    private String name;
    private String season;
    private String category;
    private String brand;
    private String place;
    private String size;
    private String cloth_body;
    private String file_name;
    private LocalDateTime created_date;
    private LocalDateTime updated_date;
    private int favorite; //0이면 좋아요 안함, 1이면 좋아요.
    private int id;
}
